import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'technology',
  title: 'Technology',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Frontend', value: 'frontend'},
          {title: 'Backend', value: 'backend'},
          {title: 'Database', value: 'database'},
          {title: 'DevOps', value: 'devops'},
          {title: 'Mobile', value: 'mobile'},
          {title: 'Cloud', value: 'cloud'},
          {title: 'Testing', value: 'testing'},
          {title: 'Design', value: 'design'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'color',
      title: 'Brand Color',
      type: 'string',
      description: 'Hex color code for the technology brand color',
    }),
    defineField({
      name: 'proficiencyLevel',
      title: 'Proficiency Level',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
      description: 'Rate from 1 (beginner) to 5 (expert)',
    }),
    defineField({
      name: 'yearsOfExperience',
      title: 'Years of Experience',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
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
      title: 'By Category',
      name: 'byCategory',
      by: [
        {field: 'category', direction: 'asc'},
        {field: 'proficiencyLevel', direction: 'desc'},
      ],
    },
    {
      title: 'By Proficiency',
      name: 'byProficiency',
      by: [{field: 'proficiencyLevel', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'logo',
      proficiency: 'proficiencyLevel',
    },
    prepare(selection) {
      const {title, subtitle, media, proficiency} = selection
      const stars = '⭐'.repeat(proficiency || 0)
      return {
        title,
        subtitle: `${subtitle} ${stars}`,
        media,
      }
    },
  },
})
