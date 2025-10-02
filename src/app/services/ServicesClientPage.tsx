"use client";
import { motion } from 'framer-motion';
import { services } from '@/data/services';
const ServicesClientPage = () => {
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
        <h1 className="text-4xl md:text-5xl font-bold text-white">Our Services</h1>
        <p className="text-md md:text-lg text-light-purple mt-2">
          What we can do for you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(138, 43, 226, 0.4)" }}
            className="bg-black/20 p-8 rounded-lg shadow-xl cursor-pointer flex flex-col"
          >
            {/* Placeholder for an icon */}
            <div className="text-brand-purple mb-4 text-4xl">
              {/* In a real project, you'd use an icon library here */}
              &#128187;
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-300 flex-grow">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesClientPage;