"use client";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold text-white mb-4"
      >
        Welcome to the Future
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg md:text-xl text-light-purple mb-8 max-w-2xl"
      >
        We build stunning, high-performance websites with a focus on user experience and cutting-edge design.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(138, 43, 226, 0.8)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-brand-purple text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-dark-purple transition-colors duration-300"
      >
        Explore Our Services
      </motion.button>
    </div>
  );
}