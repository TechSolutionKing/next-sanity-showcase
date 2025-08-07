import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'longDescription',
      title: 'Detailed Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'technology'}}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          {title: 'Web Application', value: 'web-app'},
          {title: 'Mobile Application', value: 'mobile-app'},
          {title: 'API/Backend', value: 'api'},
          {title: 'Library/Package', value: 'library'},
          {title: 'DevOps/Infrastructure', value: 'devops'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'In Development', value: 'development'},
          {title: 'Completed', value: 'completed'},
          {title: 'Maintained', value: 'maintained'},
          {title: 'Archived', value: 'archived'},
        ],
      },
      initialValue: 'development',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live Demo URL',
      type: 'url',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'teamSize',
      title: 'Team Size',
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'myRole',
      title: 'My Role',
      type: 'string',
      options: {
        list: [
          {title: 'Full Stack Developer', value: 'fullstack'},
          {title: 'Frontend Developer', value: 'frontend'},
          {title: 'Backend Developer', value: 'backend'},
          {title: 'Lead Developer', value: 'lead'},
          {title: 'Solo Developer', value: 'solo'},
          {title: 'DevOps Engineer', value: 'devops'},
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        {field: 'featured', direction: 'desc'},
        {field: 'order', direction: 'asc'},
      ],
    },
    {
      title: 'Newest First',
      name: 'newestFirst',
      by: [{field: 'startDate', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'mainImage',
      featured: 'featured',
    },
    prepare(selection) {
      const {title, subtitle, media, featured} = selection
      return {
        title: featured ? `⭐ ${title}` : title,
        subtitle,
        media,
      }
    },
  },
})
