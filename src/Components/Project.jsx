import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import SiMBAImage from "../Images/simba.jpeg";
import SISImage from "../Images/sis.jpeg";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "SiMBA",
      description:
        "Student Guidance and Academic Mentoring Management System with 3 main functions : Academic Mentoring, Violations, Counseling",
      tags: ["PHP", "Laravel", "JavaScript", "CSS"],
      image: SiMBAImage,
      github: "#",
      demo: "#",
      design: "#",
    },
    {
      title: "Student Information System",
      description:
        "Web-based application designed to provide transparent and easy access for parents to monitor their child's academic and campus progress and other activities visually (dashboard).",
      tags: ["PHP"],
      image: SISImage,
      github: "#",
      demo: "#",
    },
    {
      title: "Health Fitness Tracker",
      description:
        "Mobile-first application for tracking workouts, nutrition, and health metrics",
      tags: ["React Native", "GraphQL", "Express"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Featured <span className="text-purple-400">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex flex-col"
          >
            <div className="h-48 bg-gray-700 overflow-hidden">
              <img
                src={project.image}
                alt={`Tampilan proyek ${project.title}`}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
                onClick={() => setSelectedImage(project.image)}
              />
            </div>

            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-gray-700 text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-6 pb-6 flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub repository"
                >
                  <FaGithub className="text-xl" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Live demo"
                >
                  <FaExternalLinkAlt className="text-xl" />
                </a>
              )}
              {project.design && (
                <a
                  href={project.design}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Design mockup"
                >
                  <FiFigma className="text-xl" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-16"
      >
        <a
          href="#"
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
        >
          View All Projects
        </a>
      </motion.div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-3xl max-h-[90vh] object-contain rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
