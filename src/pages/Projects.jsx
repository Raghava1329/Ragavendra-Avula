import { motion } from "framer-motion";

const projects = [
  {
    title: "Intelligent Electric Vehicle Analytics",
    description:
      "Machine learning-based prediction system for fire risks and performance in electric scooters. Utilized linear regression, decision trees, and random forest models hosted on AWS.",
    techStack: ["AWS", "Python", "Machine Learning", "Git", "GitHub", "JupyterLab"],
    demo: "https://github.com/Raghava1329/ev-vehicle-estimate-performance",
    image: "/images/ev_project.png"
  },
  {
    title: "Parking Finder – Real-time Parking App",
    description:
      "Modern web application to locate nearby parking spots in real-time with map integration. Includes rate comparison and direction features.",
    techStack: ["React", "TypeScript", "Google Maps API", "Tailwind CSS", "Supabase"],
    demo: "https://yourparkingfinder.netlify.app/",
    image: "/images/parking_project.jpeg"
  }
];

export default function Projects() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center text-white mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-700 text-sm px-2 py-1 rounded-full text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View Project ↗
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
