"use client";
import { motion } from 'framer-motion';

const ContactClientPage = () => {
  return (
    <div className="py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Get In Touch</h1>
        <p className="text-md md:text-lg text-light-purple/80 mt-3 max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? We&apos;d love to hear from you.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="max-w-2xl mx-auto rounded-xl bg-gradient-to-br from-brand-purple/30 via-dark-purple/20 to-transparent p-1"
      >
        <form className="rounded-lg bg-brand-black/70 p-8 sm:p-10 backdrop-blur-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-light-purple/80 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-dark-purple/30 border border-brand-purple/30 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all duration-300"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-light-purple/80 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-dark-purple/30 border border-brand-purple/30 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all duration-300"
              placeholder="john.doe@example.com"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-light-purple/80 font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full bg-dark-purple/30 border border-brand-purple/30 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all duration-300"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(138, 43, 226, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-brand-purple text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-dark-purple transition-colors duration-300"
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactClientPage;