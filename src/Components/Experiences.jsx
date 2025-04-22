import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaChalkboardTeacher } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

const Experiences = () => {
  const experiences = [
    {
      title: "Student Teaching Assistant for Software Engineering",
      company: "Institut Teknologi Del",
      period: "Feb 2025 - Present",
      icon: <FaChalkboardTeacher className="text-xl" />,
      color: "from-purple-500 to-pink-500",
      bullets: [
        "Assisted in teaching Software Engineering by covering key concepts such as development processes",
        "Taught UML for system specification and documentation",
        "Guided hands-on application of Agile methodologies, particularly Scrum",
        "Facilitated backlog management and user story creation workshops",
      ],
    },
    {
      title: "Student Teaching Assistant for Discrete Mathematics",
      company: "Institut Teknologi Del",
      period: "Sep 2023 - Nov 2023",
      icon: <FaCode className="text-xl" />,
      color: "from-blue-500 to-cyan-500",
      bullets: [
        "Taught mathematical logic fundamentals relevant to computing and algorithms",
        "Covered topics including propositional logic, predicate logic, and proof techniques",
        "Conducted problem-solving sessions for combinatorics and graph theory",
      ],
    },
  ];

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
              <div className={`p-3 bg-gradient-to-r ${exp.color} rounded-full`}>
                {exp.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <p className="text-purple-300 font-medium">{exp.company}</p>
                <p className="text-gray-400">{exp.period}</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span>•</span>
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
