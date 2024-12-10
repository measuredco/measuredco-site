import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import remarkSlug from "remark-slug";
import rehypeColorChips from "rehype-color-chips";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";

export const sanitizeDefault = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [
      ...(defaultSchema.attributes?.code || []),
      ["className", /^language-./],
    ],
    span: [
      ...(defaultSchema.attributes?.span || []),
      ["className", /(^hljs-.)|(gfm-color-chip)/],
      ["style", /^background-color./],
    ],
  },
  // Removing clobberPrefix is only safe if authors are trusted!
  // https://github.com/rehypejs/rehype-sanitize#example-headings-dom-clobbering
  clobberPrefix: "",
};

export const processMarkdown = (
  markdown: string,
  sanitizeOptions = sanitizeDefault
) =>
  unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkSlug)
    .use(remarkRehype)
    .use(rehypeColorChips)
    .use(rehypeHighlight)
    // @ts-ignore
    .use(rehypeSanitize, sanitizeOptions)
    .use(rehypeStringify)
    .processSync(markdown);
