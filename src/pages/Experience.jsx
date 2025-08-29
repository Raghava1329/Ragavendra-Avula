import { motion } from "framer-motion";

const experiences = [
   {
    role: "DevOps Engineer",
    company: "Alphastream.ai",
    period: " Augest 2025 - Present",
    location: "Bangalore, IND",
    tasks: [
      "Managed containerization and orchestration using Docker, Kubernetes, and Docker Hub for application deployment.",
      "Automated cloud infrastructure provisioning on AWS using Terraform, focusing on services like ECS and EKS",
      "Streamlined Kubernetes cluster management by using eksctl to create and manage AWS EKS clusters and Helm to simplify deployments.",
      "Engineered and deployed scalable, highly available containerized applications by integrating Docker, Kubernetes, and AWS services.",
    ]
   }
  {
    role: "Software Developer QA and DevOps",
    company: "UnQue Cloudbook Pvt. Ltd",
    period: "May 2025 - Augest 2025",
    location: "Ahmedabad, IND",
    tasks: [
      "Identified and documented 50+ critical bugs in mobile applications through manual testing, significantly enhancing application stability and user experience.",
      "Developed 200+ comprehensive test cases, reducing regression testing time and consistently identifying critical bugs and UI inconsistencies.",
      "Managed and maintained AWS EC2 instances, configured environment variables, and ensured high stability of both development and production servers.",
      "Assisted in test data management within databases and configured AWS CodePipeline, optimizing CI/CD workflows for faster and more reliable deployments.",
      "Developed and implemented a cron job scheduler for automated salon payments and created scripts for automated script generation and MongoDB management.",
      "Managing the prod and dev servers and also managing the both the db’s."
    ]
  },
  {
    role: "Google Developer Groups (GDG) Cloud Lead",
    company: "Vignan’s Institute of Information Technology",
    period: "Sept 2024 - Present",
    location: "Visakhapatnam, IND",
    tasks: [
      "Led community initiatives focused on Google Cloud technologies and organized tech sessions for peers.",
      "Collaborated with GDG organizers to facilitate hands-on learning and engage 300+ students.",
      "Successfully organized and led Hackathons, mentoring sessions, and cloud study jams, significantly promoting cloud adoption and learning.",
      "Mentored 200+ students in AWS cloud computing technology."
    ]
  },
  {
    role: "Python Developer Intern",
    company: "TechOctanet Services Pvt Ltd",
    period: "May 2024 - June 2024",
    location: "Bhubaneswar, IND",
    tasks: [
      "Designed and built a robust ATM simulation interface using object-oriented programming in Python, demonstrating [e.g., strong OOD principles].",
      "Implemented core banking features (balance inquiry, deposit, withdrawal) with robust input validation, ensuring data integrity.",
      "Applied modular coding practices to ensure reusability, readability, and error handling in application logic."
    ]
  },
  {
    role: "AWS Intern",
    company: "Brainovision Solutions India Pvt. Ltd",
    period: "Jan 2024 - Mar 2024",
    location: "Hyderabad, IND",
    tasks: [
      "Deployed and managed cloud infrastructure using AWS services(EC2, S3, IAM, ALB, VPC), enhancing scalability.",
      "Configured secure virtual networks and implemented automated deployment pipelines, improving deployment efficiency.",
      "Implemented security best practices and optimized cloud resource usage, resulting in a reduction in operational costs.",
      "Managed and implemented both manual and automated server provisioning, including auto-scaling solutions, ensuring high availability and performance."
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
