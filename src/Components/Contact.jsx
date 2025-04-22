import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-[800px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Get In <span className="text-purple-400">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Details */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Contact Details</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <a
                    href="mailto:dwiladypandiangan@gmail.com"
                    className="text-white hover:text-purple-300 transition-colors"
                  >
                    dwiladypandiangan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a
                    href="tel:+6282361523914"
                    className="text-white hover:text-blue-300 transition-colors"
                  >
                    +62 823 6152 3914
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Social Media</h3>
            <div className="flex flex-col gap-6">
              <a
                href="https://github.com/dreamyyily"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-gray-700 rounded-full group-hover:bg-gray-600 transition-colors">
                  <FaGithub className="text-2xl text-gray-300 group-hover:text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  GitHub
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/dwiladypandiangan/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-gray-700 rounded-full group-hover:bg-blue-600 transition-colors">
                  <FaLinkedin className="text-2xl text-gray-300 group-hover:text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  LinkedIn
                </span>
              </a>

              <a
                href="https://www.instagram.com/dwilady_lyy/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-gray-700 rounded-full group-hover:bg-pink-600 transition-colors">
                  <FaInstagram className="text-2xl text-gray-300 group-hover:text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  Instagram
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
