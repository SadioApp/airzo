import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const Login = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [isRegister, setIsRegister] = useState(false);

    useEffect(() => {
        if (searchParams.get('tab') === 'register') {
            setIsRegister(true);
        }
    }, [searchParams]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate auth
        navigate('/dashboard');
    };

    return (
        <div className="flex items-center justify-center p-4 bg-slate-50" style={{ minHeight: 'calc(100vh - 80px)' }}>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="card max-w-md w-full p-8 shadow-2xl border-0 md:border border-gray-100 bg-white rounded-2xl"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-secondary mb-2">{isRegister ? 'Create Account' : 'Welcome Back'}</h1>
                    <p className="text-gray-500">
                        {isRegister ? 'Join Airzo to book flights easily' : 'Sign in to access your bookings'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {isRegister && (
                        <div className="input-group">
                            <label className="input-label">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input type="text" className="input-field pl-10 w-full" placeholder="John Doe" required />
                            </div>
                        </div>
                    )}

                    <div className="input-group">
                        <label className="input-label">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input type="email" className="input-field pl-10 w-full" placeholder="you@example.com" required />
                        </div>
                    </div>

                    <div className="input-group">
                        <label className="input-label">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input type="password" className="input-field pl-10 w-full" placeholder="••••••••" required />
                        </div>
                    </div>

                    {!isRegister && (
                        <div className="text-right">
                            <a href="#" className="text-sm text-primary hover:underline font-medium">Forgot password?</a>
                        </div>
                    )}

                    <button type="submit" className="btn btn-primary w-full mt-2 flex items-center justify-center gap-2 h-12 shadow-lg shadow-sky-100">
                        {isRegister ? 'Create Account' : 'Sign In'} <ArrowRight className="w-4 h-4" />
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
                    {isRegister ? 'Already have an account?' : "Don't have an account?"}
                    <button
                        onClick={() => setIsRegister(!isRegister)}
                        className="text-primary font-bold ml-1 hover:underline"
                    >
                        {isRegister ? 'Sign In' : 'Sign Up'}
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
