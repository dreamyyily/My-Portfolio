import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          My <span className="text-purple-400">Education</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
      </motion.div>

      {/* Single Education Item */}
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 max-w-[600px] w-full"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <FaGraduationCap className="text-white text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Informatics Engineering
              </h3>
              <p className="text-purple-300 font-medium">
                Institut Teknologi Del
              </p>
              <p className="text-gray-400">2022 - Present</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificates Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16"
      >
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          My <span className="text-purple-400">Certifications</span>
        </h3>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          {/* Certificate 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center gap-4"
          >
            <div className="p-2 bg-purple-500 rounded-full">
              <FaCertificate className="text-white text-lg" />
            </div>
            <div>
              <h3 className="font-bold text-white">
                Samsung Innovation Campus Batch6
              </h3>
              <p className="text-purple-300 text-sm">
                Hacktiv8 Indonesia • 2025
              </p>
            </div>
          </motion.div>

          {/* Certificate 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center gap-4"
          >
            <div className="p-2 bg-pink-500 rounded-full">
              <FaCertificate className="text-white text-lg" />
            </div>
            <div>
              <h3 className="font-bold text-white">Research</h3>
              <p className="text-pink-300 text-sm">
                Institut Teknologi Del • 2024
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
