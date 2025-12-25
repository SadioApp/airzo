import React from 'react';
import SearchForm from '../components/SearchForm';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, CreditCard, Globe } from 'lucide-react';

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-[600px] bg-secondary text-white overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')" }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.9))' }} />


                <div className="container relative h-full flex flex-col justify-center items-center text-center pb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-semibold tracking-wider uppercase mb-4"
                    >
                        Fly Better
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
                    >
                        Smart Flight Booking <br /> Made <span className="text-primary">Easy</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-300 max-w-2xl mb-8"
                    >
                        Discover the world with Airzo. Best prices, premium airlines, and a seamless booking experience await you.
                    </motion.p>
                </div>
            </section>

            {/* Search Form Container */}
            <div className="container px-4">
                <SearchForm />
            </div>

            {/* Features Section */}
            <section className="py-24 bg-gray-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-secondary">Why Choose Airzo?</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">We provide the best flight booking experience with top-notch security and 24/7 support.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={<ShieldCheck className="w-8 h-8 text-primary" />}
                            title="Secure Booking"
                            desc="Your data is protected with state-of-the-art encryption standards."
                        />
                        <FeatureCard
                            icon={<Clock className="w-8 h-8 text-primary" />}
                            title="Fast & Easy"
                            desc="Book your flight in minutes with our streamlined process."
                        />
                        <FeatureCard
                            icon={<CreditCard className="w-8 h-8 text-primary" />}
                            title="Best Prices"
                            desc="We guarantee competitive prices and transparent billing."
                        />
                        <FeatureCard
                            icon={<Globe className="w-8 h-8 text-primary" />}
                            title="Global Support"
                            desc="24/7 customer support in multiple languages."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, desc }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all"
    >
        <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mb-6">
            {icon}
        </div>
        <h3 className="font-bold text-xl mb-3 text-secondary">{title}</h3>
        <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
    </motion.div>
);

export default Home;
