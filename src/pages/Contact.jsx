import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="container py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-secondary mb-4">Get in Touch</h1>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg">Have questions about your flight? We're here to help you 24/7.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Info */}
                <div className="flex flex-col gap-6">
                    <div className="card flex items-center gap-6 p-8 border border-gray-100 hover:shadow-lg transition-all">
                        <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                            <Phone className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-1 text-secondary">Phone Support</h3>
                            <p className="text-gray-500 text-sm mb-2">24/7 dedicated support line.</p>
                            <p className="font-bold text-secondary text-lg">+1 (555) 123-4567</p>
                        </div>
                    </div>

                    <div className="card flex items-center gap-6 p-8 border border-gray-100 hover:shadow-lg transition-all">
                        <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                            <Mail className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-1 text-secondary">Email Us</h3>
                            <p className="text-gray-500 text-sm mb-2">We reply within 24 hours.</p>
                            <p className="font-bold text-secondary text-lg">support@airzo.com</p>
                        </div>
                    </div>

                    <div className="card flex items-center gap-6 p-8 border border-gray-100 hover:shadow-lg transition-all">
                        <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-1 text-secondary">Headquarters</h3>
                            <p className="text-gray-500 text-sm mb-2">Visit our main office.</p>
                            <p className="font-bold text-secondary text-lg">123 Innovation Dr, Tech City</p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="card p-8 border border-gray-100 shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-secondary">Send us a Message</h2>
                    <form className="flex flex-col gap-5">
                        <div className="input-group">
                            <label className="input-label">Name</label>
                            <input type="text" className="input-field" placeholder="Your Name" />
                        </div>
                        <div className="input-group">
                            <label className="input-label">Email</label>
                            <input type="email" className="input-field" placeholder="you@example.com" />
                        </div>
                        <div className="input-group">
                            <label className="input-label">Message</label>
                            <textarea className="input-field h-40 resize-none py-3" placeholder="How can we help?" />
                        </div>
                        <button className="btn btn-primary h-12 flex items-center justify-center gap-2 mt-2 shadow-lg shadow-sky-100">
                            <Send className="w-4 h-4" /> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
