import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlaneTakeoff, PlaneLanding, Calendar, Users, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const SearchForm = () => {
    const navigate = useNavigate();
    const [searchData, setSearchData] = useState({
        from: '',
        to: '',
        depart: '',
        returnDate: '',
        passengers: 1
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/search', { state: searchData });
    };

    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-xl max-w-5xl mx-auto -mt-24 relative z-10 border border-gray-100"
        >
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">

                {/* From */}
                <div className="md:col-span-3 input-group">
                    <label className="input-label flex items-center gap-2 mb-1">
                        <PlaneTakeoff className="w-4 h-4 text-primary" /> From
                    </label>
                    <input
                        type="text"
                        placeholder="City or Airport"
                        className="input-field w-full"
                        value={searchData.from}
                        onChange={(e) => setSearchData({ ...searchData, from: e.target.value })}
                        required
                    />
                </div>

                {/* To */}
                <div className="md:col-span-3 input-group">
                    <label className="input-label flex items-center gap-2 mb-1">
                        <PlaneLanding className="w-4 h-4 text-primary" /> To
                    </label>
                    <input
                        type="text"
                        placeholder="City or Airport"
                        className="input-field w-full"
                        value={searchData.to}
                        onChange={(e) => setSearchData({ ...searchData, to: e.target.value })}
                        required
                    />
                </div>

                {/* Dates */}
                <div className="md:col-span-2 input-group">
                    <label className="input-label flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4 text-primary" /> Departure
                    </label>
                    <input
                        type="date"
                        className="input-field w-full text-sm"
                        value={searchData.depart}
                        onChange={(e) => setSearchData({ ...searchData, depart: e.target.value })}
                        required
                    />
                </div>

                <div className="md:col-span-2 input-group">
                    <label className="input-label flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4 text-primary" /> Return
                    </label>
                    <input
                        type="date"
                        className="input-field w-full text-sm"
                        value={searchData.returnDate}
                        onChange={(e) => setSearchData({ ...searchData, returnDate: e.target.value })}
                    />
                </div>

                {/* Search Button */}
                <div className="md:col-span-2">
                    <button type="submit" className="btn btn-primary w-full h-[46px] flex items-center justify-center gap-2 shadow-lg shadow-sky-200">
                        <Search className="w-5 h-5" /> Search
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default SearchForm;
