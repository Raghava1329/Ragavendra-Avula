import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        action="https://formsubmit.co/raghavendraavula92@gmail.com"
        method="POST"
      >
        {/* Disable CAPTCHA */}
        <input type="hidden" name="_captcha" value="false" />

        {/* Optional: Redirect after form submit */}
        {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md"
        >
          Send Message
        </button>
      </motion.form>

      <div className="flex flex-col items-center justify-center text-center mt-10 space-y-4 text-gray-300">
        <a
          href="mailto:Raghavendraavula92@gmail.com"
          className="flex items-center gap-2 hover:text-blue-400"
        >
          <FaEnvelope /> Raghavendraavula92@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/avula-ragavendra-ba1276266"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-400"
        >
          <FaLinkedin /> LinkedIn Profile
        </a>
      </div>
    </section>
  );
}
