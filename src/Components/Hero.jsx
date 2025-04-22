import heropic from "../Images/dwilady.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-24 px-6 max-w-[1200px] mx-auto relative"
    >
      <div className="grid gap-12 md:grid-cols-2 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <TypeAnimation
            sequence={[
              "Front End Developer",
              1000,
              "System Analyst",
              1000,
              "Informatics Student",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-3xl font-semibold text-purple-300 italic"
          />

          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          >
            HEY, I'M <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-transparent bg-clip-text">
              DWI LADY
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 max-w-[90%] md:text-lg text-md leading-relaxed"
          >
            I design and develop clean, responsive user interfaces as a
            Front-End Developer, and analyze system needs to craft effective
            technical solutions as a System Analyst. I'm passionate about
            creating digital experiences that are intuitive, functional, and
            impactful.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="pt-4"
          >
            <a
              href="/CV_DwiLady.pdf"
              download="CV_DwiLady.pdf"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              Download My CV
            </a>
          </motion.div>
        </motion.div>

        {/* Image Content - Clean Version */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <img
              src={heropic}
              alt="Dwi Lady Profile"
              className="rounded-2xl shadow-xl w-[250px] md:w-[400px] hover:scale-[1.02] transition-transform duration-300"
              style={{
                boxShadow: "0 10px 30px -10px rgba(192, 132, 252, 0.3)",
                height: "auto",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
