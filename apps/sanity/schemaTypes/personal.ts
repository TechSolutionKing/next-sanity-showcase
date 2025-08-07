import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'personal',
  title: 'Personal Information',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., Full Stack Developer, Software Engineer',
    }),
    defineField({
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(500),
      description: 'Brief introduction that appears on the homepage',
    }),
    defineField({
      name: 'about',
      title: 'About Me (Detailed)',
      type: 'blockContent',
      description: 'Detailed about section for the about page',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'resume',
      title: 'Resume/CV',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., San Francisco, CA or Remote',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'website',
      title: 'Personal Website',
      type: 'url',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({
          name: 'github',
          title: 'GitHub',
          type: 'url',
        }),
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter/X',
          type: 'url',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        }),
        defineField({
          name: 'youtube',
          title: 'YouTube',
          type: 'url',
        }),
        defineField({
          name: 'medium',
          title: 'Medium',
          type: 'url',
        }),
        defineField({
          name: 'dev',
          title: 'Dev.to',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'availability',
      title: 'Availability Status',
      type: 'string',
      options: {
        list: [
          {title: 'Available for hire', value: 'available'},
          {title: 'Open to opportunities', value: 'open'},
          {title: 'Not available', value: 'unavailable'},
          {title: 'Freelance only', value: 'freelance'},
        ],
      },
      initialValue: 'open',
    }),
    defineField({
      name: 'yearsOfExperience',
      title: 'Years of Experience',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'specialties',
      title: 'Specialties',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Key areas of expertise',
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'language',
              title: 'Language',
              type: 'string',
            },
            {
              name: 'proficiency',
              title: 'Proficiency',
              type: 'string',
              options: {
                list: [
                  {title: 'Native', value: 'native'},
                  {title: 'Fluent', value: 'fluent'},
                  {title: 'Advanced', value: 'advanced'},
                  {title: 'Intermediate', value: 'intermediate'},
                  {title: 'Basic', value: 'basic'},
                ],
              },
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'profileImage',
    },
  },
})
