import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-gray-800/50 mt-20 section-gradient"
    >
      <div className="container mx-auto p-6 text-center text-gray-400">
        <motion.p whileHover={{ scale: 1.02 }} className="cursor-default">
          © 2024 Attendlytics. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}
