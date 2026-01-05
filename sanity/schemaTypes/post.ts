import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string', // Simpler than reference for now
            initialValue: 'General',
            options: {
                list: [
                    { title: 'Engineering', value: 'Engineering' },
                    { title: 'Cyber Security', value: 'Cyber Security' },
                    { title: 'Philosophy', value: 'Philosophy' },
                    { title: 'AI', value: 'AI' },
                ]
            }
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'readTime',
            title: 'Read Time (e.g. "5 min")',
            type: 'string',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
    ],
})
