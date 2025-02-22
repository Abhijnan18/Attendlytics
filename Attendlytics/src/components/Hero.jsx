import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-accent to-gray-400 bg-clip-text text-transparent">
              Smart Classroom Attendance
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Transform your classroom management with AI-powered attendance
            tracking
          </motion.p>
        </motion.div>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(212,212,212,0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent/90 transition-all"
        >
          Start Free Trial
        </motion.button>
      </div>
    </section>
  );
}
