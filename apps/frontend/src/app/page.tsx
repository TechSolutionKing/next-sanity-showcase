import {
  client,
  personalInfoQuery,
  featuredProjectsQuery,
  technologiesQuery,
  recentPostsQuery,
} from "@/lib/sanity";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechnologyStack from "@/components/TechnologyStack";
import Link from "next/link";

async function getPageData() {
  try {
    const [personalInfo, featuredProjects, technologies, recentPosts] =
      await Promise.all([
        client.fetch(personalInfoQuery),
        client.fetch(featuredProjectsQuery),
        client.fetch(technologiesQuery),
        client.fetch(recentPostsQuery),
      ]);

    return {
      personalInfo,
      featuredProjects,
      technologies,
      recentPosts,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      personalInfo: null,
      featuredProjects: [],
      technologies: [],
      recentPosts: [],
    };
  }
}

export default async function Home() {
  const { personalInfo, featuredProjects, technologies, recentPosts } =
    await getPageData();

  return (
    <div>
      <HeroSection personalInfo={personalInfo} />
      <FeaturedProjects projects={featuredProjects} />
      <TechnologyStack technologies={technologies} />

      {/* Recent Blog Posts Section */}
      {recentPosts.length > 0 && (
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Latest Blog Posts
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Thoughts, tutorials, and insights about web development,
                technology, and my journey as a developer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.map((post: any) => (
                <article
                  key={post._id}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                >
                  {post.mainImage && (
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700">
                      <img
                        src="/api/placeholder/400/300"
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </time>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      <Link
                        href={`/blog/${post.slug.current}`}
                        className="hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.categories.map((category: any) => (
                          <span
                            key={category._id}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                          >
                            {category.title}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                View All Posts
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
