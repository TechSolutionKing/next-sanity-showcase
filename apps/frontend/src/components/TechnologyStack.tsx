"use client";

import { motion } from "framer-motion";

interface Technology {
  _id: string;
  name: string;
  category: string;
  proficiencyLevel: number;
  logo?: any;
  color?: string;
}

interface TechnologyStackProps {
  technologies: Technology[];
}

export default function TechnologyStack({
  technologies,
}: TechnologyStackProps) {
  const categories = [
    "frontend",
    "backend",
    "database",
    "devops",
    "mobile",
    "cloud",
    "testing",
    "design",
  ];

  const groupedTechnologies = categories.reduce(
    (acc, category) => {
      acc[category] = technologies.filter((tech) => tech.category === category);
      return acc;
    },
    {} as Record<string, Technology[]>
  );

  const categoryLabels = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    devops: "DevOps",
    mobile: "Mobile",
    cloud: "Cloud",
    testing: "Testing",
    design: "Design",
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technology Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of the technologies, frameworks, and tools
            I use to build modern, scalable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, categoryIndex) => {
            const categoryTechs = groupedTechnologies[category];
            if (!categoryTechs || categoryTechs.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 capitalize">
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </h3>

                <div className="space-y-3">
                  {categoryTechs.map((tech) => (
                    <div
                      key={tech._id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        {tech.logo && (
                          <div className="w-6 h-6 flex-shrink-0">
                            <img
                              src="/api/placeholder/24/24"
                              alt={tech.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {tech.name}
                        </span>
                      </div>

                      {/* Proficiency Stars */}
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`w-3 h-3 ${
                              star <= tech.proficiencyLevel
                                ? "text-yellow-400"
                                : "text-gray-300 dark:text-gray-600"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        {technologies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {technologies.length}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Technologies
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {technologies.filter((t) => t.proficiencyLevel >= 4).length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Expert Level
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {
                    categories.filter(
                      (cat) => groupedTechnologies[cat]?.length > 0
                    ).length
                  }
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Categories
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {Math.round(
                    (technologies.reduce(
                      (acc, tech) => acc + tech.proficiencyLevel,
                      0
                    ) /
                      technologies.length) *
                      20
                  )}
                  %
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Avg. Proficiency
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
