import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { sendContactMessage } from '../../firebase';

const ContactModal = ({ isOpen, onClose }) => {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        requirements: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const result = await sendContactMessage(formData);

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', requirements: '', message: '' });

                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                }, 1500);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 4000);
            }
        } catch (err) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-2xl bg-[#0d0d0d] border-grid overflow-hidden"
                    >

                        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

                        <div className="relative z-10">

                            <div className="flex justify-between items-center p-6 border-b-grid bg-black/50">
                                <div>
                                    <h2 className="text-2xl font-black uppercase tracking-tight">Send a Message</h2>
                                    <p className="text-xs font-mono text-neon mt-1">SYSTEM_INK_COMMUNICATION</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white hover:text-black transition-colors border-grid"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-gray-500 uppercase">Your Name</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-[#0a0a0a] border-grid p-3 focus:outline-none focus:border-neon transition-colors font-mono text-sm"
                                            placeholder="Enter name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-gray-500 uppercase">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-[#0a0a0a] border-grid p-3 focus:outline-none focus:border-neon transition-colors font-mono text-sm"
                                            placeholder="Enter email"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500 uppercase">Service/Requirement</label>
                                    <select
                                        value={formData.requirements}
                                        onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                                        className="w-full bg-[#0a0a0a] border-grid p-3 focus:outline-none focus:border-neon transition-colors font-mono text-sm"
                                    >
                                        <option value="">Select Service</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="AI Chatbot Development">AI Chatbot Development</option>
                                        <option value="Backend System">Backend System</option>
                                        <option value="Mobile App">Mobile App</option>
                                        <option value="UI/UX Design">UI/UX Design</option>
                                        <option value="Full Project">Full Digital Project</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500 uppercase">Project Details</label>
                                    <textarea
                                        required
                                        rows="4"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-[#0a0a0a] border-grid p-3 focus:outline-none focus:border-neon transition-colors font-mono text-sm resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <button
                                    disabled={status === 'loading' || status === 'success'}
                                    type="submit"
                                    className={`w-full py-4 flex items-center justify-center gap-3 font-black uppercase tracking-widest transition-all ${status === 'success'
                                        ? 'bg-green-500 text-white'
                                        : 'bg-neon text-black hover:bg-white'
                                        }`}
                                >
                                    {status === 'loading' ? (
                                        <Loader2 className="animate-spin w-5 h-5" />
                                    ) : status === 'success' ? (
                                        <>SENT SUCCESSFULLY <CheckCircle2 className="w-5 h-5" /></>
                                    ) : (
                                        <>INITIATE TRANSMISSION <Send className="w-5 h-5" /></>
                                    )}
                                </button>

                                {status === 'error' && (
                                    <p className="text-red-500 text-xs font-mono text-center">Transmission failed. Please try again later.</p>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
