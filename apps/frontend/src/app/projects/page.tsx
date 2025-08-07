import { client, allProjectsQuery } from "@/lib/sanity";
import Link from "next/link";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

export default async function Projects() {
  const projects = await client.fetch(allProjectsQuery).catch(() => []);

  const projectTypes = [
    { value: "all", label: "All Projects" },
    { value: "web-app", label: "Web Applications" },
    { value: "mobile-app", label: "Mobile Apps" },
    { value: "api", label: "APIs & Backend" },
    { value: "library", label: "Libraries" },
    { value: "devops", label: "DevOps" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A collection of projects that showcase my skills in full-stack
          development, modern frameworks, and innovative problem-solving.
        </p>
      </div>

      {/* Filter Tabs - For now just show all, can add client-side filtering later */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {projectTypes.map((type) => (
          <button
            key={type.value}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              type.value === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any) => (
            <div
              key={project._id}
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img
                  src="/api/placeholder/600/400"
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                      ⭐ Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    {project.projectType.replace("-", " ")}
                  </span>
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        title="View Source"
                      >
                        <CodeBracketIcon className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        title="Live Demo"
                      >
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  <Link href={`/projects/${project.slug.current}`}>
                    {project.title}
                  </Link>
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Status Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      project.status === "completed"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : project.status === "development"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          : project.status === "maintained"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
                    }`}
                  >
                    {project.status === "development"
                      ? "In Development"
                      : project.status === "completed"
                        ? "Completed"
                        : project.status === "maintained"
                          ? "Maintained"
                          : "Archived"}
                  </span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech: any) => (
                    <span
                      key={tech._id}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                      style={
                        tech.color
                          ? {
                              backgroundColor: tech.color + "20",
                              color: tech.color,
                            }
                          : {}
                      }
                    >
                      {tech.name}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Project Dates */}
                {project.startDate && (
                  <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    {new Date(project.startDate).getFullYear()}
                    {project.endDate &&
                      ` - ${new Date(project.endDate).getFullYear()}`}
                    {!project.endDate &&
                      project.status === "development" &&
                      " - Present"}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Projects will appear here once they are added to the Sanity CMS.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
