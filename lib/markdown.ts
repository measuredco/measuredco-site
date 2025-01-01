import deepmerge from "deepmerge";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import rehypeColorChips from "rehype-color-chips";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";

export const sanitizeDefault = deepmerge(defaultSchema, {
  attributes: {
    code: ["className", /^language-./],
    span: [
      ["className", /(^hljs-.)|(gfm-color-chip)/],
      ["style", /^background-color./],
    ],
  },
  clobberPrefix: "",
});

export const processMarkdown = (
  markdown: string,
  sanitizeOptions = sanitizeDefault
) =>
  unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeColorChips)
    .use(rehypeHighlight)
    .use(rehypeSanitize, sanitizeOptions)
    .use(rehypeStringify)
    .processSync(markdown);
