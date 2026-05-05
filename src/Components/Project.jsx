import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { projects } from "../data/projects";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

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

      {featuredProject && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg ring-1 ring-purple-500/50 hover:shadow-purple-400/40 transition-all duration-300 mb-8"
        >
          {/* Badge */}
          <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            ✦ Final Project
          </div>

          <div className="flex flex-col md:flex-row">
            {featuredProject.image ? (
              <div className="md:w-1/2 bg-gray-900 flex items-center justify-center overflow-hidden shrink-0 min-h-[280px]">
                <img
                  src={featuredProject.image}
                  alt={`Tampilan proyek ${featuredProject.title}`}
                  className="w-full h-full object-contain cursor-pointer p-2 transition-transform duration-500 hover:scale-105"
                  onClick={() => setSelectedImage(featuredProject.image)}
                />
              </div>
            ) : (
              <div className="md:w-1/2 min-h-[280px] bg-gradient-to-br from-purple-900/40 to-pink-900/40 flex items-center justify-center shrink-0">
                <span className="text-6xl">🌿</span>
              </div>
            )}

            <div className="flex flex-col justify-between p-8 md:w-1/2">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {featuredProject.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-gray-700 text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                {featuredProject.github && (
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub className="text-xl" />
                    <span className="text-sm">View Code</span>
                  </a>
                )}
                {featuredProject.demo && (
                  <a
                    href={featuredProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                )}
                {featuredProject.design && (
                  <a
                    href={featuredProject.design}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FiFigma className="text-xl" />
                    <span className="text-sm">Design</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex flex-col"
          >
            {project.image && (
              <div className="h-48 bg-gray-900 overflow-hidden flex items-center justify-center">
                <img
                  src={project.image}
                  alt={`Tampilan proyek ${project.title}`}
                  className="w-full h-full object-contain cursor-pointer transition-transform duration-500 hover:scale-105"
                  onClick={() => setSelectedImage(project.image)}
                />
              </div>
            )}

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