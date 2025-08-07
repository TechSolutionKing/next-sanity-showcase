import { client, experienceQuery } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

export default async function Experience() {
  const experiences = await client.fetch(experienceQuery).catch(() => []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Experience
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          My professional journey and the experiences that shaped my career
        </p>
      </div>

      {experiences.length > 0 ? (
        <div className="space-y-8">
          {experiences.map((experience: any, index: number) => (
            <div
              key={experience._id}
              className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-l-0 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full border-2 border-white dark:border-gray-900"></div>

              {/* Company Logo */}
              {experience.companyLogo && (
                <div className="absolute -left-8 top-8 w-12 h-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-2">
                  <img
                    src="/api/placeholder/48/48"
                    alt={experience.company}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg ml-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {experience.position}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <a
                        href={experience.companyWebsite || "#"}
                        target={experience.companyWebsite ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        {experience.company}
                      </a>
                      {experience.location && (
                        <>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-600 dark:text-gray-400">
                            {experience.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-end mt-2 sm:mt-0">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        experience.current
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
                      }`}
                    >
                      {experience.current ? "Current" : "Past"}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 capitalize">
                      {experience.employmentType
                        .replace(/([A-Z])/g, " $1")
                        .trim()}
                    </span>
                  </div>
                </div>

                {/* Date Range */}
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {new Date(experience.startDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}{" "}
                  -{" "}
                  {experience.endDate
                    ? new Date(experience.endDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                      })
                    : "Present"}
                  <span className="mx-2">•</span>
                  <span>
                    {(() => {
                      const startDate = new Date(experience.startDate);
                      const endDate = experience.endDate
                        ? new Date(experience.endDate)
                        : new Date();
                      const months =
                        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
                        (endDate.getMonth() - startDate.getMonth());
                      const years = Math.floor(months / 12);
                      const remainingMonths = months % 12;

                      if (years > 0 && remainingMonths > 0) {
                        return `${years} yr${years > 1 ? "s" : ""} ${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`;
                      } else if (years > 0) {
                        return `${years} yr${years > 1 ? "s" : ""}`;
                      } else {
                        return `${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`;
                      }
                    })()}
                  </span>
                </div>

                {/* Description */}
                <div className="prose prose-sm dark:prose-invert mb-4">
                  <PortableText value={experience.description} />
                </div>

                {/* Key Achievements */}
                {experience.achievements &&
                  experience.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        {experience.achievements.map(
                          (achievement: string, achievementIndex: number) => (
                            <li key={achievementIndex}>{achievement}</li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                {/* Technologies */}
                {experience.technologies &&
                  experience.technologies.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech: any) => (
                          <span
                            key={tech._id}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
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
              No experience entries found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Work experience will appear here once added to the Sanity CMS.
            </p>
          </div>
        </div>
      )}

      {/* Download Resume CTA */}
      <div className="mt-16 text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Want to learn more?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Download my resume for a comprehensive overview of my experience and
          skills.
        </p>
        <button
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          disabled
        >
          Download Resume
          <span className="ml-2 text-xs">(Coming Soon)</span>
        </button>
      </div>
    </div>
  );
}
