"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomeClientPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4 overflow-hidden">
      {/* Animated background shape */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute top-1/2 left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-brand-purple/20 via-transparent to-transparent -translate-x-1/2 -translate-y-1/2"
        style={{ filter: 'blur(100px)' }}
      />

      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          Crafting Digital Excellence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-light-purple/80 mb-8 max-w-2xl mx-auto"
        >
          We specialize in building stunning, high-performance websites and applications with a focus on user experience and cutting-edge design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(138, 43, 226, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-purple text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-dark-purple transition-colors duration-300"
            >
              View Our Work
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}