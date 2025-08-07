import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'employmentType',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          {title: 'Full-time', value: 'fulltime'},
          {title: 'Part-time', value: 'parttime'},
          {title: 'Contract', value: 'contract'},
          {title: 'Freelance', value: 'freelance'},
          {title: 'Internship', value: 'internship'},
        ],
      },
      initialValue: 'fulltime',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave empty if currently working here',
    }),
    defineField({
      name: 'current',
      title: 'Currently Working Here',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'achievements',
      title: 'Key Achievements',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of key achievements and accomplishments',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'reference', to: {type: 'technology'}}],
    }),
    defineField({
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'companyWebsite',
      title: 'Company Website',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
      description: 'Higher numbers appear first',
    }),
  ],
  orderings: [
    {
      title: 'Latest First',
      name: 'latestFirst',
      by: [
        {field: 'current', direction: 'desc'},
        {field: 'order', direction: 'desc'},
        {field: 'startDate', direction: 'desc'},
      ],
    },
  ],
  preview: {
    select: {
      title: 'position',
      subtitle: 'company',
      media: 'companyLogo',
      current: 'current',
      startDate: 'startDate',
      endDate: 'endDate',
    },
    prepare(selection) {
      const {title, subtitle, media, current, startDate, endDate} = selection
      const currentText = current ? ' (Current)' : ''
      const dateRange = startDate
        ? `${new Date(startDate).getFullYear()}${endDate ? ` - ${new Date(endDate).getFullYear()}` : ' - Present'}`
        : ''
      return {
        title,
        subtitle: `${subtitle}${currentText} ${dateRange}`,
        media,
      }
    },
  },
})
