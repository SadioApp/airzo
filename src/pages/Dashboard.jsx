import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, MapPin, User, Settings, LogOut } from 'lucide-react';

const Dashboard = () => {
    const upcomingFlights = [
        { id: 1, from: 'London (LHR)', to: 'New York (JFK)', date: '25 Dec, 2024', time: '10:30 AM', airline: 'Airzo Airways', status: 'Confirmed' }
    ];

    const pastFlights = [
        { id: 2, from: 'Dubai (DXB)', to: 'London (LHR)', date: '10 Nov, 2024', time: '02:00 PM', airline: 'SkyHigh', status: 'Completed' }
    ];

    return (
        <div className="container py-8">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <div className="w-full md:w-64 flex-shrink-0">
                    <div className="card p-6 flex flex-col items-center text-center border border-gray-100">
                        <div className="w-24 h-24 mb-4 rounded-full p-1 border-2 border-primary">
                            <img src="https://ui-avatars.com/api/?name=John+Doe&background=random" alt="Profile" className="w-full h-full rounded-full object-cover" />
                        </div>
                        <h2 className="font-bold text-lg text-secondary">John Doe</h2>
                        <p className="text-sm text-gray-400 mb-6 font-medium">Gold Member</p>

                        <nav className="w-full flex flex-col gap-2">
                            <button className="flex items-center gap-3 p-3 bg-sky-50 text-primary rounded-lg font-medium transition-all">
                                <Clock className="w-5 h-5" /> My Trips
                            </button>
                            <button className="flex items-center gap-3 p-3 hover:bg-gray-50 text-gray-600 rounded-lg font-medium transition-all">
                                <User className="w-5 h-5" /> Profile
                            </button>
                            <button className="flex items-center gap-3 p-3 hover:bg-gray-50 text-gray-600 rounded-lg font-medium transition-all">
                                <Settings className="w-5 h-5" /> Settings
                            </button>
                            <button className="flex items-center gap-3 p-3 hover:bg-red-50 text-red-500 rounded-lg font-medium transition-all mt-4 border-t border-gray-100">
                                <LogOut className="w-5 h-5" /> Sign Out
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <h2 className="text-2xl font-bold text-secondary mb-6">Upcoming Flights</h2>
                        {upcomingFlights.length > 0 ? (
                            upcomingFlights.map(flight => (
                                <BookingCard key={flight.id} flight={flight} isUpcoming />
                            ))
                        ) : (
                            <div className="p-8 text-center text-gray-400 bg-gray-50 rounded-xl border border-dashed border-gray-200">No upcoming flights</div>
                        )}

                        <h2 className="text-2xl font-bold text-secondary mb-6 mt-10">Past Trips</h2>
                        {pastFlights.map(flight => (
                            <BookingCard key={flight.id} flight={flight} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const BookingCard = ({ flight, isUpcoming }) => (
    <div className="card mb-4 flex flex-col md:flex-row justify-between items-center gap-6 hover:shadow-lg transition-all border border-gray-100 p-6">
        <div className="flex items-center gap-4 w-full md:w-auto">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isUpcoming ? 'bg-sky-100 text-primary' : 'bg-gray-100 text-gray-400'}`}>
                <Calendar className="w-7 h-7" />
            </div>
            <div>
                <h3 className="font-bold text-lg text-secondary mb-1">{flight.from} <span className="text-gray-300 mx-1">→</span> {flight.to}</h3>
                <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
                    <span>{flight.date}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{flight.time}</span>
                </p>
            </div>
        </div>

        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-4 md:pt-0 border-gray-100">
            <div className="text-right">
                <div className="font-bold text-sm text-secondary mb-1">{flight.airline}</div>
                <div className={`text-xs font-bold px-2.5 py-1 rounded-full inline-block ${isUpcoming ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                    {flight.status}
                </div>
            </div>
            {isUpcoming && <button className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white text-sm px-5 py-2 whitespace-nowrap">Manage Booking</button>}
        </div>
    </div>
);

export default Dashboard;
