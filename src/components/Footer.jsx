import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/5 text-center text-gray-500 text-sm">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p>&copy; {new Date().getFullYear()} Bagavathisingh. All rights reserved.</p>
                <div className="flex items-center gap-6">
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
