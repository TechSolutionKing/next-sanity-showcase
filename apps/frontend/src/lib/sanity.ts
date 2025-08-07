import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Type definitions
export interface PersonalInfo {
  _id: string;
  name: string;
  title: string;
  bio: string;
  about: any[];
  profileImage: any;
  resume?: any;
  location?: string;
  email?: string;
  phone?: string;
  website?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    medium?: string;
    dev?: string;
  };
  availability: "available" | "open" | "unavailable" | "freelance";
  yearsOfExperience?: number;
  specialties?: string[];
  languages?: Array<{
    language: string;
    proficiency: "native" | "fluent" | "advanced" | "intermediate" | "basic";
  }>;
}

export interface Technology {
  _id: string;
  name: string;
  slug: { current: string };
  category:
    | "frontend"
    | "backend"
    | "database"
    | "devops"
    | "mobile"
    | "cloud"
    | "testing"
    | "design"
    | "other";
  logo?: any;
  color?: string;
  proficiencyLevel: number;
  yearsOfExperience?: number;
  description?: string;
  order: number;
}

export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  longDescription?: any[];
  mainImage: any;
  gallery?: any[];
  technologies: Technology[];
  projectType:
    | "web-app"
    | "mobile-app"
    | "api"
    | "library"
    | "devops"
    | "other";
  status: "development" | "completed" | "maintained" | "archived";
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  startDate?: string;
  endDate?: string;
  teamSize?: number;
  myRole?: "fullstack" | "frontend" | "backend" | "lead" | "solo" | "devops";
  order: number;
}

export interface Experience {
  _id: string;
  company: string;
  position: string;
  location?: string;
  employmentType:
    | "fulltime"
    | "parttime"
    | "contract"
    | "freelance"
    | "internship";
  startDate: string;
  endDate?: string;
  current: boolean;
  description: any[];
  achievements?: string[];
  technologies?: Technology[];
  companyLogo?: any;
  companyWebsite?: string;
  order: number;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  author: {
    name: string;
    image: any;
  };
  mainImage: any;
  categories: Array<{
    title: string;
    slug: { current: string };
  }>;
  publishedAt: string;
  body: any[];
}

// Queries
export const personalInfoQuery = `*[_type == "personal"][0]`;

export const technologiesQuery = `*[_type == "technology"] | order(category asc, proficiencyLevel desc)`;

export const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(order asc) {
  ...,
  technologies[]->
}`;

export const allProjectsQuery = `*[_type == "project"] | order(featured desc, order asc) {
  ...,
  technologies[]->
}`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  ...,
  technologies[]->
}`;

export const experienceQuery = `*[_type == "experience"] | order(current desc, order desc, startDate desc) {
  ...,
  technologies[]->
}`;

export const recentPostsQuery = `*[_type == "post"] | order(publishedAt desc)[0...3] {
  ...,
  author->,
  categories[]->
}`;

export const allPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  ...,
  author->,
  categories[]->
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  ...,
  author->,
  categories[]->
}`;
