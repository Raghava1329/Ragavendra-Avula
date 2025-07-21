import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Developer QA and DevOps",
    company: "UnQue Cloudbook Pvt. Ltd",
    period: "May 2025 - Present",
    location: "Ahmedabad, IND",
    tasks: [
      "Found 50+ critical bugs in mobile app through manual testing, boosting stability",
      "Created 60+ test cases to reduce regression time and improve bug tracking",
      "Managed AWS EC2 instances and set up AWS CodePipeline to optimize CI/CD",
      "Implemented cron job scheduler for payments and automated MongoDB script generation",
      "Managing the dev and prod servers and dev and prod DB's."
    ]
  },
  {
    role: "Google Developer Groups (GDG) Cloud Lead",
    company: "Vignan’s Institute of Information Technology",
    period: "Sept 2024 - Present",
    location: "Visakhapatnam, IND",
    tasks: [
      "Led community initiatives focused on Google Cloud technologies and organized tech sessions for peers.",
      "Conducted Hackathons, mentoring sessions, and cloud study jams to promote cloud adoption and learning",
      "Collaborated with GDG organizers to facilitate hands-on learning and engage 300+ students",
      "Guiding the 100+ students in the cloud computing technology aws."
    ]
  },
  {
    role: "Python Developer Intern",
    company: "TechOctanet Services Pvt Ltd",
    period: "May 2024 - June 2024",
    location: "Bhubaneswar, IND",
    tasks: [
      "Built an ATM simulation using OOP in Python with key banking features.",
      "Implemented input validation, error handling, and modular code.",
      "Applied modular coding practices to ensure reusability, readability, and error handling in application logic."
    ]
  },
  {
    role: "AWS Intern",
    company: "Brainovision Solutions India Pvt. Ltd",
    period: "Jan 2024 - Mar 2024",
    location: "Hyderabad, IND",
    tasks: [
      "Deployed and managed cloud infrastructure using AWS services including EC2, S3, IAM, ALB, and VPC",
      "Configured secure virtual networks and automated deployment pipelines for scalability and efficiency",
      "Implemented security best practices and optimized cloud resource usage to reduce operational costs",
      "Managed and implemented manual and automated server along with auto scaling"
    ]
  }
];

export default function Experience() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center text-white mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => {
          const bgColor = exp.company.includes("UnQue")
            ? "bg-purple-800"
            : exp.company.includes("Vignan")
            ? "bg-blue-800"
            : exp.company.includes("TechOctanet")
            ? "bg-yellow-700"
            : exp.company.includes("Brainovision")
            ? "bg-green-800"
            : "bg-gray-800";

          return (
            <motion.div
              key={index}
              className={`${bgColor} rounded-2xl p-6 shadow-lg`}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-1">{exp.role}</h3>
              <p className="text-gray-200">{exp.company}</p>
              <p className="text-gray-400 text-sm">
                {exp.period} | {exp.location}
              </p>
              <ul className="list-disc list-inside text-gray-100 mt-3 space-y-1">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
