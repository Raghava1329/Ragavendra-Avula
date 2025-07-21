import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode, FaLaptopCode, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  const [displayName, setDisplayName] = useState("");
  const fullName = "Ragavendra Avula";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayName(fullName.slice(0, index + 1));
      index++;
      if (index === fullName.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-4 overflow-hidden">
      {/* Animated background bubbles */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none animate-pulse bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-10 blur-2xl" />

      <motion.h1
        className="text-5xl md:text-7xl font-bold text-white mb-4 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm <span className="text-blue-400">{displayName}</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        A passionate Computer Science student, AWS enthusiast, and problem solver. 1100+ coding problems solved. Skilled in DevOps, Python, C++, and web technologies.
      </motion.p>

      <motion.div
        className="flex space-x-6 mb-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="https://github.com/Raghava1329" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
          <FaGithub size={30} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="https://www.linkedin.com/in/avula-ragavendra-ba1276266" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
          <FaLinkedin size={30} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="https://leetcode.com/u/raghavendraavula2004/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
          <FaLaptopCode size={30} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="https://www.codechef.com/users/raghavendra_a" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400">
          <FaCode size={30} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="https://www.instagram.com/ragavendra_avula?igsh=dWkyc2FqdTVyaGdp" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
          <FaInstagram size={24} />
        </motion.a>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.a
          href="/Avula_Ragavendra-2.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
        <motion.a
          href="https://drive.google.com/file/d/1uTVmk6wMP7gFDbROaO-_8eXtoAwIWC8d/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border border-blue-500 text-blue-400 px-6 py-3 rounded-full shadow-lg font-semibold hover:bg-blue-500 hover:text-white transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Resume
        </motion.a>
      </motion.div>
    </section>
  );
}