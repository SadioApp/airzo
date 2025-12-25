import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8 mt-auto">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
                            <Plane className="w-8 h-8 fill-current" />
                            <span>Airzo</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Smart flight booking made easy. We connect you to the world with the best prices and premium experience.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg">Company</h3>
                        <div className="flex flex-col gap-2 text-gray-400">
                            <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
                            <Link to="/careers" className="hover:text-primary transition-colors">Careers</Link>
                            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
                            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
                        </div>
                    </div>

                    {/* Support */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg">Support</h3>
                        <div className="flex flex-col gap-2 text-gray-400">
                            <Link to="/help" className="hover:text-primary transition-colors">Help Center</Link>
                            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                            <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg">Get in Touch</h3>
                        <ul className="flex flex-col gap-3 text-gray-400">
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>123 Innovation Dr, Tech City</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-primary" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-primary" />
                                <span>support@airzo.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2024 Airzo. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors text-white">
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors text-white">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors text-white">
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors text-white">
                            <Linkedin className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
