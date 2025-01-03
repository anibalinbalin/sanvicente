/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypePrettyCode, { Options } from 'rehype-pretty-code';

const Update = defineDocumentType(() => ({
  name: 'Update',
  filePathPattern: 'updates/*.mdx',
  contentType: 'mdx',
  fields: {
    date: {
      type: 'date',
      description: 'The date the page was published',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: ({ _raw }) => {
        return _raw.sourceFileName.replace(/\.mdx?$/, '');
      },
    },
  },
}));

const Writing = defineDocumentType(() => ({
  name: 'Writing',
  filePathPattern: 'writings/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the writing',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date the writing was published',
      required: true,
    },
    description: {
      type: 'string',
      description: 'A brief description of the writing',
      required: true,
    },
    featured: {
      type: 'boolean',
      description: 'Whether this is a featured writing',
      default: false,
    },
    status: {
      type: 'string',
      description: 'The publication status of the writing',
      default: 'draft',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: ({ _raw }) => _raw.sourceFileName.replace(/\.mdx?$/, ''),
    },
    readingTime: {
      type: 'json',
      resolve: (doc) => readingTime(doc.body.raw),
    },
  },
}));

const rehypePrettyCodeOptions: Partial<Options> = {
  theme: {
    dark: 'github-dark',
    light: 'github-light',
  },
  tokensMap: {
    fn: 'entity.name.function',
    objKey: 'meta.object-literal.key',
  },
};

export default makeSource({
  contentDirPath: './src/data',
  date: {
    timezone: 'America/New_York',
  },
  documentTypes: [Update, Writing],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});
