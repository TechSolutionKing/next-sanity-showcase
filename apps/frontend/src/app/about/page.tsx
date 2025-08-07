import { client, personalInfoQuery } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function About() {
  const personalInfo = await client.fetch(personalInfoQuery).catch(() => null);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {personalInfo?.title || "Full Stack Developer"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        {/* Profile Image */}
        <div className="lg:col-span-1">
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
            <img
              src="/api/placeholder/400/400"
              alt={personalInfo?.name || "Profile"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* About Content */}
        <div className="lg:col-span-2 space-y-6">
          {personalInfo?.about ? (
            <PortableText value={personalInfo.about} />
          ) : (
            <div className="prose prose-lg dark:prose-invert">
              <p>
                I'm a passionate full-stack developer with{" "}
                {personalInfo?.yearsOfExperience || 5}+ years of experience
                creating innovative web solutions. I love turning complex
                problems into simple, beautiful designs and building
                applications that make a difference.
              </p>
              <p>
                My journey in software development started with curiosity about
                how websites work, and it has evolved into a deep passion for
                creating exceptional user experiences with modern technologies.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
          )}

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Experience
              </h3>
              <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                {personalInfo?.yearsOfExperience || 5}+ Years
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Location
              </h3>
              <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                {personalInfo?.location || "Remote"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Specialties */}
      {personalInfo?.specialties && personalInfo.specialties.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Specialties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalInfo.specialties.map(
              (specialty: string, index: number) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {specialty}
                  </h3>
                </div>
              )
            )}
          </div>
        </div>
      )}

      {/* Languages */}
      {personalInfo?.languages && personalInfo.languages.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Languages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {personalInfo.languages.map((lang: any, index: number) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {lang.language}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                  {lang.proficiency}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact CTA */}
      <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Let's Work Together
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          I'm always interested in new opportunities and exciting projects.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
}
