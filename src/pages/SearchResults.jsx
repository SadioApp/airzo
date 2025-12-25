import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FlightCard from '../components/FlightCard';
import { SlidersHorizontal } from 'lucide-react';

import { searchFlights } from '../services/flightService';

const SearchResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = location.state || { from: 'London', to: 'New York', depart: '2024-12-25', passengers: 1 };
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFlights = async () => {
            setLoading(true);
            try {
                const data = await searchFlights(searchParams);
                setFlights(data);
            } catch (error) {
                console.error("Failed to fetch flights", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFlights();
    }, [searchParams]);

    const handleBook = (flight) => {
        navigate('/booking', { state: { flight, searchParams } });
    };

    return (
        <div className="container py-8 mx-auto px-4 max-w-5xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div>
                    <h1 className="text-2xl font-bold text-secondary">Flights from {searchParams.from} to {searchParams.to}</h1>
                    <p className="text-gray-500 mt-1 flex items-center gap-2">
                        <span className="font-medium text-primary">{searchParams.depart}</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span>{searchParams.passengers} Passenger{searchParams.passengers > 1 ? 's' : ''}</span>
                    </p>
                </div>
                <button className="btn btn-outline border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-primary flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4" /> Filter & Sort
                </button>
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-500 font-medium">Scanning airlines...</p>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    {flights.map(flight => (
                        <FlightCard key={flight.id} flight={flight} onBook={handleBook} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResults;
