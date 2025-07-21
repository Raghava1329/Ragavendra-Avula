import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center text-blue-500 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="text-gray-300 text-lg space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p>
          I'm currently pursuing a B.Tech in Computer Science and Engineering at
          Vignan’s Institute Of Information Technology (2022–2026), with a CGPA of 8.5.
        </p>
        <p>
          I completed my intermediate from Narayana Junior College (89%) and 10th from
          Kendriya Vidyalaya, Ongole (75%).
        </p>
        <p>
          My interests include cloud computing, and solving challenging
          algorithmic problems. I enjoy building scalable web and cloud solutions that solve
          real-world problems.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-semibold mb-3 text-blue-400">Programming Languages</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>C++</li>
            <li>Python</li>
            <li>JavaScript</li>
          </ul>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-semibold mb-3 text-green-400">Technologies & Tools</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>AWS, CI/CD</li>
            <li>ReactJS, HTML, CSS</li>
            <li>Git, GitHub, VS Code, Linux</li>
            <li>MySQL, MongoDB, Supabase</li>
            <li>Manual Testing</li>
          </ul>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-semibold mb-3 text-yellow-400">Soft Skills</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Communication</li>
            <li>Planning & Organizing</li>
            <li>Problem Solving</li>
          </ul>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-semibold mb-3 text-pink-400">Coding Stats</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>1100+ problems solved</li>
            <li>1450+ rating, 2-star on CodeChef</li>
            <li>100-day streak on CodeChef</li>
            <li>50-day streak on LeetCode</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
