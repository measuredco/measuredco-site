import { useEffect, useState } from "react";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

export const Markdown = ({
  children,
  tagNames = ["b", "strong", "em", "a"],
}) => {
  const [textProcessed, setTextProcessed] = useState(children);

  useEffect(() => {
    unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeSanitize, {
        tagNames,
      })
      .use(rehypeStringify)
      .process(children)
      .then((result) => {
        setTextProcessed(String(result));
      });
  }, [children]);

  return <span dangerouslySetInnerHTML={{ __html: textProcessed }} />;
};
