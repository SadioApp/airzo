import React from 'react';
import { Plane } from 'lucide-react';
import { motion } from 'framer-motion';

const FlightCard = ({ flight, onBook }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card mb-4 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition-all border border-gray-100"
        >
            {/* Airline Info */}
            <div className="flex items-center gap-4 w-full md:w-1/4">
                <div className="w-12 h-12 bg-gray-50 rounded-full overflow-hidden flex-shrink-0">
                    <img src={`https://ui-avatars.com/api/?name=${flight.airline}&background=0EA5E9&color=fff&bold=true`} alt={flight.airline} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 className="font-bold text-secondary text-lg">{flight.airline}</h3>
                    <p className="text-sm text-gray-400">{flight.flightNumber}</p>
                </div>
            </div>

            {/* Flight Details */}
            <div className="flex-1 w-full grid grid-cols-3 gap-4 items-center text-center">
                <div className="text-left md:text-center">
                    <div className="text-2xl font-bold text-secondary">{flight.departure}</div>
                    <div className="text-sm text-gray-500 font-medium">{flight.fromCode}</div>
                </div>

                <div className="flex flex-col items-center px-4">
                    <div className="text-xs text-gray-400 mb-2">{flight.duration}</div>
                    <div className="w-full flex items-center justify-between relative">
                        <div className="w-2 h-2 bg-gray-300 rounded-full z-10"></div>
                        <div className="h-[2px] w-full bg-gray-200 absolute top-1/2 -translate-y-1/2"></div>
                        <div className="bg-white px-2 z-10 rotate-90 md:rotate-0 transform transition-transform">
                            <Plane className="w-4 h-4 text-primary" />
                        </div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full z-10"></div>
                    </div>
                    <div className="text-xs text-primary mt-2 font-medium bg-sky-50 px-2 py-0.5 rounded-full">{flight.stops}</div>
                </div>

                <div className="text-right md:text-center">
                    <div className="text-2xl font-bold text-secondary">{flight.arrival}</div>
                    <div className="text-sm text-gray-500 font-medium">{flight.toCode}</div>
                </div>
            </div>

            {/* Price & Action */}
            <div className="w-full md:w-auto md:min-w-[150px] flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center md:border-l border-gray-100 md:pl-6 gap-2 pt-4 md:pt-0 border-t md:border-t-0 mt-4 md:mt-0">
                <div className="text-3xl font-bold text-secondary">${flight.price}</div>
                <button onClick={() => onBook(flight)} className="btn btn-primary w-full md:w-auto whitespace-nowrap">
                    Select Flight
                </button>
            </div>
        </motion.div>
    );
};

export default FlightCard;
