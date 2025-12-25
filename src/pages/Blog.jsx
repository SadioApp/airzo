import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BLOG_POSTS = [
    {
        id: 1,
        title: "Top 10 Hidden Gems in Europe for 2025",
        excerpt: "Discover the most beautiful and less crowded European destinations for your next summer vacation. From Albanian beaches to Slovenian mountains.",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop",
        date: "Dec 20, 2024",
        author: "Sarah Smith",
        category: "Travel Guide"
    },
    {
        id: 2,
        title: "How to Travel on a Budget Without Sacrificing Comfort",
        excerpt: "Learn the secrets of booking cheap flights, finding affordable luxury accommodation, and eating like a local without breaking the bank.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        date: "Dec 18, 2024",
        author: "Mike Johnson",
        category: "Travel Tips"
    },
    {
        id: 3,
        title: "The Future of Air Travel: What to Expect in the Next Decade",
        excerpt: "From supersonic flights to sustainable aviation fuel, explore the technologies that will shape the way we fly in the near future.",
        image: "https://images.unsplash.com/photo-1559067515-bf7d799bbb20?q=80&w=2070&auto=format&fit=crop",
        date: "Dec 15, 2024",
        author: "Elena Rodriguez",
        category: "Aviation News"
    }
];

const Blog = () => {
    return (
        <div className="container py-12">
            <div className="text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-secondary mb-4"
                >
                    Airzo Blog
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-500 max-w-2xl mx-auto text-lg"
                >
                    Travel tips, destination guides, and the latest news from the world of aviation.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="card p-0 overflow-hidden hover:shadow-lg transition-all border border-gray-100 flex flex-col h-full"
                    >
                        <div className="h-48 overflow-hidden relative group">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                                {post.category}
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                            </div>

                            <h3 className="font-bold text-xl text-secondary mb-3 leading-tight hover:text-primary transition-colors cursor-pointer">
                                {post.title}
                            </h3>

                            <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-1">
                                {post.excerpt}
                            </p>

                            <button className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all mt-auto group">
                                Read Article <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
