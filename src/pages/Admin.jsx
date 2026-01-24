import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { Terminal, Trash2, Mail, User, Calendar, MessageSquare, ShieldCheck, Lock, Unlock, ArrowRight } from 'lucide-react';

const Admin = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [adminCode, setAdminCode] = useState('');
    const [error, setError] = useState(false);
    const [firestoreError, setFirestoreError] = useState(null);

    useEffect(() => {
        const auth = sessionStorage.getItem('admin_auth');
        if (auth === 'true') {
            setIsAuthorized(true);
        }
    }, []);

    useEffect(() => {
        if (!isAuthorized) return;

        const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const msgs = [];
            querySnapshot.forEach((doc) => {
                msgs.push({ id: doc.id, ...doc.data() });
            });
            setMessages(msgs);
            setLoading(false);
            setFirestoreError(null);
        }, (error) => {
            console.error("Firestore subscription error:", error);
            setFirestoreError(error.code === 'permission-denied'
                ? "ACCESS FORBIDDEN: Database security rules are preventing read access."
                : "TRANSMISSION ERROR: Failed to fetch messages.");
            setLoading(false);
        });

        return () => unsubscribe();
    }, [isAuthorized]);

    const handleAuth = (e) => {
        e.preventDefault();
        const secretKey = import.meta.env.VITE_ADMIN_KEY;
        if (adminCode === secretKey) {
            sessionStorage.setItem('admin_auth', 'true');
            setIsAuthorized(true);
            setError(false);
        } else {
            setError(true);
            setAdminCode('');

            setTimeout(() => setError(false), 500);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this message?')) {
            try {
                await deleteDoc(doc(db, "messages", id));
            } catch (error) {
                console.error("Error deleting message: ", error);
            }
        }
    };

    if (!isAuthorized) {
        return (
            <div className="min-h-screen flex items-center justify-center px-6 bg-[#0a0a0a]">
                <div className="absolute inset-0 bg-grid opacity-20" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative w-full max-w-md border-grid bg-[#0d0d0d] p-8 shadow-2xl"
                >
                    <div className="flex justify-center mb-8">
                        <div className={`p-4 rounded-none border-grid transition-colors duration-300 ${error ? 'bg-red-500/20 border-red-500 text-red-500' : 'bg-neon/10 border-neon text-neon'}`}>
                            <Lock size={40} className={error ? 'animate-bounce' : ''} />
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-2 tracking-tighter uppercase">Security Protocol</h2>
                    <p className="text-gray-500 text-center text-xs font-mono mb-8 uppercase tracking-widest leading-loose">
                        Unauthorized access detected.<br />Please provide administrative credentials.
                    </p>

                    <form onSubmit={handleAuth} className="space-y-4">
                        <div className="relative">
                            <input
                                type="password"
                                value={adminCode}
                                onChange={(e) => setAdminCode(e.target.value)}
                                placeholder="ENTER ACCESS CODE"
                                className={`w-full bg-black border-grid px-4 py-4 font-mono text-neon placeholder:text-gray-700 focus:outline-none transition-all ${error ? 'border-red-500 ring-1 ring-red-500' : 'focus:border-neon focus:ring-1 focus:ring-neon'}`}
                                autoFocus
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-neon hover:bg-neon hover:text-black transition-colors"
                            >
                                <ArrowRight size={20} />
                            </button>
                        </div>

                        <AnimatePresence>
                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="text-red-500 text-[10px] font-bold font-mono text-center uppercase tracking-widest"
                                >
                                    Invalid Access Token - System Locked
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </form>

                    <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center opacity-30">
                        <span className="text-[10px] font-mono tracking-tighter">SECURE.NODE.v2</span>
                        <div className="flex gap-1">
                            <div className="w-1 h-1 bg-neon animate-pulse" />
                            <div className="w-1 h-1 bg-neon animate-pulse delay-75" />
                            <div className="w-1 h-1 bg-neon animate-pulse delay-150" />
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-12 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-neon/10 rounded-lg">
                                <ShieldCheck className="text-neon" size={24} />
                            </div>
                            <h1 className="text-4xl font-bold tracking-tighter uppercase">Admin Panel</h1>
                        </div>
                        <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">System Maintenance & Message Control</p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => {
                                sessionStorage.removeItem('admin_auth');
                                setIsAuthorized(false);
                            }}
                            className="border-grid px-4 py-2 text-[10px] font-bold uppercase hover:bg-white hover:text-black transition-colors"
                        >
                            Lock Console
                        </button>
                        <div className="border-grid bg-white/5 px-6 py-3 rounded-none">
                            <span className="block text-[10px] text-gray-500 font-bold uppercase mb-1">Total Messages</span>
                            <span className="text-2xl font-bold text-neon font-mono line-height-none">{messages.length}</span>
                        </div>
                    </div>
                </motion.div>

                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="w-12 h-12 border-2 border-neon border-t-transparent rounded-full animate-spin" />
                    </div>
                ) : firestoreError ? (
                    <div className="border-grid py-20 px-6 text-center bg-red-500/5">
                        <p className="text-red-500 font-mono uppercase tracking-widest text-sm mb-4">{firestoreError}</p>
                        <p className="text-gray-500 text-[10px] font-mono max-w-md mx-auto leading-relaxed">
                            Verify your Firestore Security Rules in the Firebase Console.
                            The database is rejecting the connection protocol.
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {messages.length === 0 ? (
                            <div className="border-grid py-20 text-center">
                                <p className="text-gray-500 font-mono uppercase tracking-widest text-sm">No transmissions received</p>
                            </div>
                        ) : (
                            messages.map((msg, index) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group relative border-grid bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
                                >
                                    <div className="absolute top-0 left-0 w-[2px] h-0 bg-neon group-hover:h-full transition-all duration-300" />

                                    <div className="p-6">
                                        <div className="flex flex-col md:flex-row gap-6">
                                            <div className="w-full md:w-64 space-y-3">
                                                <div className="flex items-center gap-3 text-gray-400">
                                                    <User size={14} className="text-neon" />
                                                    <span className="text-sm font-bold truncate uppercase">{msg.name}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-gray-400">
                                                    <Mail size={14} className="text-neon" />
                                                    <span className="text-xs font-mono truncate">{msg.email}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-gray-500">
                                                    <Calendar size={14} />
                                                    <span className="text-[10px] font-mono">
                                                        {msg.timestamp?.toDate().toLocaleString() || 'TRANSMITTING...'}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex-1 border-l-grid md:pl-6">
                                                <div className="flex items-start gap-4">
                                                    <MessageSquare size={16} className="text-neon mt-1 flex-shrink-0" />
                                                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                                                        {msg.message}
                                                    </p>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => handleDelete(msg.id)}
                                                className="md:opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-red-500/20 hover:text-red-500 border-grid self-start"
                                                title="Delete Transmission"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;
