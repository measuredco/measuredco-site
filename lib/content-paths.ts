import { readdir } from "fs/promises";
import { join, relative, sep } from "path";

const CONTENT_DIR = join(process.cwd(), "content");

const walk = async (dir: string): Promise<string[]> => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const full = join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (
      entry.isFile() &&
      entry.name.endsWith(".json") &&
      !entry.name.startsWith("_")
    ) {
      files.push(full);
    }
  }

  return files;
};

// Every content page as a path-segment array.
// "index" -> [], "work/bt" -> ["work", "bt"], "blog/foo" -> ["blog", "foo"].
export const getContentSlugs = async (): Promise<string[][]> => {
  const files = await walk(CONTENT_DIR);

  return files.map((file) => {
    const rel = relative(CONTENT_DIR, file).replace(/\.json$/, "");

    return rel === "index" ? [] : rel.split(sep);
  });
};
