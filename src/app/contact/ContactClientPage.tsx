"use client";
import { motion } from 'framer-motion';
const ContactClientPage = () => {
  return (
    <div className="py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
        <p className="text-md md:text-lg text-light-purple mt-2">
          Have a question or a project in mind? Let's talk.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-2xl mx-auto bg-black/20 p-8 rounded-lg shadow-2xl"
      >
        <div className="mb-6">
          <label htmlFor="name" className="block text-light-purple font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full bg-gray-800/50 border border-dark-purple text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all duration-300"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-light-purple font-medium mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full bg-gray-800/50 border border-dark-purple text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all duration-300"
            placeholder="john.doe@example.com"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="message" className="block text-light-purple font-medium mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full bg-gray-800/50 border border-dark-purple text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all duration-300"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(138, 43, 226, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-brand-purple text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-dark-purple transition-colors duration-300"
          >
            Send Message
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
};

export default ContactClientPage;