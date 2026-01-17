import deepmerge from "deepmerge";
import type { Schema } from "hast-util-sanitize";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import rehypeColorChips from "rehype-color-chips";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";

const sanitizeDefault: Schema = deepmerge(defaultSchema, {
  attributes: {
    code: ["className", /^language-./],
    span: [
      ["className", /(^hljs-.)|(gfm-color-chip)/],
      ["style", /^background-color./],
    ],
  },
  clobberPrefix: "",
}) as Schema;

const sanitizeInline: Schema = {
  ...sanitizeDefault,
  tagNames: ["a", "b", "br", "code", "del", "em", "strong", "sup"],
};

export const processMarkdown = (markdown: string, inline?: boolean) =>
  unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeColorChips)
    .use(rehypeHighlight)
    .use(rehypeSanitize, inline ? sanitizeInline : sanitizeDefault)
    .use(rehypeStringify)
    .processSync(markdown);
