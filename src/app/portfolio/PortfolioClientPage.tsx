"use client";
import { motion, Variants, Transition } from 'framer-motion';
import { portfolio } from '@/data/portfolio';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioClientPage = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const titleTransition: Transition = { duration: 0.7, ease: "easeOut" };

  return (
    <div className="py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={titleTransition}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our Portfolio</h1>
        <p className="text-md md:text-lg text-light-purple/80 mt-3 max-w-2xl mx-auto">
          A curated selection of our finest work, showcasing our passion for design and technology.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((project, i) => (
          <Link href={`/portfolio/${project.slug}`} key={project.id}>
            <motion.div
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group rounded-xl bg-gradient-to-br from-brand-purple/30 via-dark-purple/20 to-transparent p-1 transition-all duration-300 hover:from-brand-purple/60 hover:to-dark-purple/60 hover:shadow-2xl hover:shadow-brand-purple/20 h-full"
            >
              <div className="h-full rounded-lg bg-brand-black/70 p-6 backdrop-blur-lg flex flex-col">
                <div className="relative w-full h-48 mb-6 overflow-hidden rounded-md">
                  <Image
                    src={project.imageUrl || `https://picsum.photos/seed/${project.id}/400/300`}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-dark-purple/50 text-light-purple text-xs font-semibold px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioClientPage;