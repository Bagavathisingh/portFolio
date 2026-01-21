import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
    initializeFirestore
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MSG_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

export const sendContactMessage = async (data) => {

    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("TRANSMISSION_TIMEOUT")), 10000);
    });

    try {
        const messagePromise = addDoc(collection(db, "messages"), {
            ...data,
            timestamp: serverTimestamp(),
        });

        const docRef = await Promise.race([messagePromise, timeoutPromise]);

        return { success: true, id: docRef.id };
    } catch (error) {
        return { success: false };
    }
};

export { app, db };