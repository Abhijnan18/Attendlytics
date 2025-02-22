import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-6 border-b border-gray-800/50 section-gradient"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <span className="text-2xl font-bold text-accent">AttendLytics</span>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent/10 hover:bg-accent/20 text-accent px-6 py-2 rounded-full transition-all border border-gray-700/50"
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  );
}
