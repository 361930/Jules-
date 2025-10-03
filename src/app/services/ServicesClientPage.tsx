"use client";
import { motion } from 'framer-motion';
import { services } from '@/data/services';
import Link from 'next/link';

const icons: { [key: string]: JSX.Element } = {
  code: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    </svg>
  ),
  figma: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 12h-2.25m-5.834 5.834l1.591 1.591M4.5 12H2.25m5.834-5.834L6.166 4.5M12 21.75V19.5" />
    </svg>
  ),
  search: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
  cube: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  ),
};

const ServicesClientPage = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      },
    }),
  };

  return (
    <div className="py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our Services</h1>
        <p className="text-md md:text-lg text-light-purple/80 mt-3 max-w-2xl mx-auto">
          We provide a wide range of digital services to help your business grow and succeed in the modern world.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((service, i) => (
          <Link href={`/services/${service.slug}`} key={service.id}>
            <motion.div
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.03 }}
              className="rounded-xl bg-gradient-to-br from-brand-purple/30 via-dark-purple/20 to-transparent p-1 transition-all duration-300 hover:from-brand-purple/60 hover:to-dark-purple/60 hover:shadow-2xl hover:shadow-brand-purple/20 h-full"
            >
              <div className="h-full rounded-lg bg-brand-black/70 p-8 backdrop-blur-lg flex flex-col">
                <div className="text-brand-purple mb-5">
                  {icons[service.icon] || icons['code']}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 flex-grow">{service.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesClientPage;