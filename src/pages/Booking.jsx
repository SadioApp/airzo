import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Booking = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const flight = location.state?.flight;

    if (!flight) {
        return (
            <div className="min-h-50vh flex flex-col items-center justify-center p-8 text-center text-gray-500">
                <p className="mb-4">No flight selected.</p>
                <button onClick={() => navigate('/')} className="btn btn-primary">Go Home</button>
            </div>
        );
    }

    const [step, setStep] = useState(1); // 1: Details, 2: Payment, 3: Success

    const renderStep1 = () => (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                <h2 className="text-xl font-bold">Passenger Details</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="input-group">
                    <label className="input-label">First Name</label>
                    <input type="text" className="input-field" placeholder="John" />
                </div>
                <div className="input-group">
                    <label className="input-label">Last Name</label>
                    <input type="text" className="input-field" placeholder="Doe" />
                </div>
                <div className="input-group">
                    <label className="input-label">Email</label>
                    <input type="email" className="input-field" placeholder="john@example.com" />
                </div>
                <div className="input-group">
                    <label className="input-label">Passport Number</label>
                    <input type="text" className="input-field" placeholder="A12345678" />
                </div>
            </div>

            <div className="mt-4">
                <h3 className="font-bold mb-3 text-sm uppercase text-gray-500">Seat Selection</h3>
                <div className="flex flex-col md:flex-row gap-4">
                    <label className="flex items-center gap-3 cursor-pointer p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition w-full relative overflow-hidden">
                        <input type="radio" name="seat" className="accent-primary w-5 h-5" defaultChecked />
                        <div>
                            <div className="font-bold text-secondary">Economy Class</div>
                            <div className="text-xs text-gray-500">Standard legroom, 1 carry-on</div>
                        </div>
                        <div className="ml-auto text-primary font-bold text-sm bg-sky-50 px-2 py-1 rounded">Included</div>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition w-full relative overflow-hidden">
                        <input type="radio" name="seat" className="accent-primary w-5 h-5" />
                        <div>
                            <div className="font-bold text-secondary">Business Class</div>
                            <div className="text-xs text-gray-500">Extra legroom, Priority boarding</div>
                        </div>
                        <div className="ml-auto text-primary font-bold text-sm bg-sky-50 px-2 py-1 rounded">+$150</div>
                    </label>
                </div>
            </div>

            <button onClick={() => setStep(2)} className="btn btn-primary w-full mt-4 h-12">Continue to Payment</button>
        </div>
    );

    const renderStep2 = () => (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                <h2 className="text-xl font-bold">Payment Information</h2>
            </div>

            <div className="p-5 bg-sky-50 rounded-xl border border-sky-100 mb-4 flex justify-between items-center">
                <div>
                    <div className="text-sm text-gray-500">Total Amount to Pay</div>
                    <div className="font-bold text-2xl text-secondary">${flight.price}</div>
                </div>
                <div className="px-3 py-1 bg-white rounded-full text-xs font-bold text-sky-600 border border-sky-100">Secure Payment</div>
            </div>

            <div className="input-group">
                <label className="input-label">Card Number</label>
                <input type="text" className="input-field" placeholder="0000 0000 0000 0000" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="input-group">
                    <label className="input-label">Expiry Date</label>
                    <input type="text" className="input-field" placeholder="MM/YY" />
                </div>
                <div className="input-group">
                    <label className="input-label">CVC</label>
                    <input type="text" className="input-field" placeholder="123" />
                </div>
            </div>

            <div className="flex gap-4 mt-6">
                <button onClick={() => setStep(1)} className="btn btn-outline border-gray-300 text-gray-700 w-full">Back</button>
                <button onClick={() => setStep(3)} className="btn btn-primary w-full shadow-lg shadow-sky-200">Pay & Confirm</button>
            </div>
        </div>
    );

    const renderStep3 = () => (
        <div className="text-center py-12 flex flex-col items-center">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
            >
                <CheckCircle className="w-10 h-10 text-green-500" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-3 text-secondary">Booking Confirmed!</h2>
            <p className="text-gray-500 mb-10 max-w-sm">Your flight has been booked successfully. A confirmation email has been sent to your inbox.</p>

            <div className="bg-gray-50 p-6 rounded-xl w-full max-w-md text-left mb-8 border border-gray-100">
                <div className="flex justify-between mb-3">
                    <span className="text-gray-500">Booking Ref</span>
                    <span className="font-bold text-secondary font-mono">#AZ88291</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-3 mt-2">
                    <span className="text-gray-500">Total Paid</span>
                    <span className="font-bold text-green-600 text-lg">${flight.price}</span>
                </div>
            </div>

            <button onClick={() => navigate('/dashboard')} className="btn btn-primary w-full max-w-xs">Go to My Trips</button>
        </div>
    );

    return (
        <div className="container py-12 max-w-6xl mx-auto px-4">
            {step < 3 && (
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Search Results
                </button>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Flight Summary Sidebar */}
                <div className="lg:col-span-1 h-fit">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="card sticky top-24 bg-white border border-gray-200 shadow-sm"
                    >
                        <h3 className="font-bold text-lg mb-6 text-secondary border-b border-gray-100 pb-4">Flight Summary</h3>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gray-50 rounded-lg overflow-hidden border border-gray-100 p-1">
                                <img src={`https://ui-avatars.com/api/?name=${flight.airline}&background=transparent&color=000&bold=true`} alt={flight.airline} className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <div className="font-bold text-secondary">{flight.airline}</div>
                                <div className="text-xs text-white bg-slate-500 px-1.5 py-0.5 rounded">{flight.flightNumber}</div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-6 bg-gray-50 p-4 rounded-lg">
                            <div className="text-center">
                                <div className="font-bold text-2xl text-secondary">{flight.fromCode}</div>
                                <div className="text-xs text-gray-500">{flight.departure}</div>
                            </div>

                            <div className="flex flex-col items-center px-2 w-full">
                                <div className="text-[10px] text-gray-400 mb-1">{flight.duration}</div>
                                <div className="h-[1px] w-full bg-gray-300 relative">
                                    <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-gray-300"></div>
                                </div>
                                <div className="text-[10px] text-primary mt-1">{flight.stops}</div>
                            </div>

                            <div className="text-center">
                                <div className="font-bold text-2xl text-secondary">{flight.toCode}</div>
                                <div className="text-xs text-gray-500">{flight.arrival}</div>
                            </div>
                        </div>

                        <div className="flex justify-between items-end border-t border-gray-100 pt-4">
                            <div className="text-sm text-gray-500">Total Price</div>
                            <div className="text-3xl font-bold text-primary">${flight.price}</div>
                        </div>
                    </motion.div>
                </div>

                {/* Main Form Area */}
                <div className="lg:col-span-2">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="card bg-white shadow-lg border-0"
                    >
                        {step === 1 && renderStep1()}
                        {step === 2 && renderStep2()}
                        {step === 3 && renderStep3()}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
