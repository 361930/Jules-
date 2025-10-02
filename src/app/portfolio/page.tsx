"use client";
import { motion } from 'framer-motion';
import { portfolio } from '@/data/portfolio';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Portfolio',
  description: 'Browse a selection of our finest work, showcasing our expertise in web development, design, and animation.',
};

const PortfolioPage = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <div className="py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">Our Portfolio</h1>
        <p className="text-md md:text-lg text-light-purple mt-2">
          A selection of our finest work.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((project, i) => (
          <motion.div
            key={project.id}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(138, 43, 226, 0.4)" }}
            style={{ perspective: '1000px' }}
            className="bg-black/20 p-6 rounded-lg shadow-xl cursor-pointer overflow-hidden"
          >
            <motion.div
              whileHover={{
                rotateY: 10,
                rotateX: -10,
                scale: 1.05,
              }}
              className="relative w-full h-48 mb-4"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="bg-dark-purple text-light-purple text-xs font-semibold px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;