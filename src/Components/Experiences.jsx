import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";
import { experiences } from "../data/experiences";

const iconMap = {
  "Frontend Engineer Intern": <FaLaptopCode className="text-xl text-white" />,
  "Student Teaching Assistant for Software Engineering": (
    <FaChalkboardTeacher className="text-xl text-white" />
  ),
};

const Experiences = () => {
  return (
    <section id="experiences" className="py-20 px-6 max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          My <span className="text-purple-400">Experiences</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-3 bg-gradient-to-r ${exp.color} rounded-full shrink-0`}
              >
                {iconMap[exp.title]}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <p className="text-purple-300 font-medium">{exp.company}</p>
                <p className="text-gray-400 text-sm">{exp.period}</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 text-purple-400 shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;