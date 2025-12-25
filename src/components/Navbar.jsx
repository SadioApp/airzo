import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed w-full z-50 backdrop-blur-md border-b border-gray-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <div className="container">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
                        <Plane className="w-8 h-8 fill-current" />
                        <span>Airzo</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" className={`font-medium transition-colors ${isActive('/') ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>Home</Link>
                        <Link to="/search" className={`font-medium transition-colors ${isActive('/search') ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>Flights</Link>
                        <Link to="/blog" className={`font-medium transition-colors ${isActive('/blog') ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>Blog</Link>
                        <Link to="/dashboard" className={`font-medium transition-colors ${isActive('/dashboard') ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>My Trips</Link>
                        <Link to="/contact" className={`font-medium transition-colors ${isActive('/contact') ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>Contact</Link>
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link to="/login" className="font-medium text-gray-600 hover:text-primary">Sign In</Link>
                        <Link to="/login?tab=register" className="btn btn-primary px-6 py-2.5 rounded-full">Sign Up</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="container py-4 flex flex-col gap-4">
                            <Link to="/" onClick={() => setIsOpen(false)} className="font-medium p-2 hover:bg-gray-50 rounded-lg">Home</Link>
                            <Link to="/search" onClick={() => setIsOpen(false)} className="font-medium p-2 hover:bg-gray-50 rounded-lg">Flights</Link>
                            <Link to="/blog" onClick={() => setIsOpen(false)} className="font-medium p-2 hover:bg-gray-50 rounded-lg">Blog</Link>
                            <Link to="/dashboard" onClick={() => setIsOpen(false)} className="font-medium p-2 hover:bg-gray-50 rounded-lg">My Trips</Link>
                            <Link to="/login" onClick={() => setIsOpen(false)} className="font-medium p-2 hover:bg-gray-50 rounded-lg flex items-center gap-2">
                                <User className="w-4 h-4" /> Sign In / Sign Up
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
