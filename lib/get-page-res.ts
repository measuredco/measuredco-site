import { readFile } from "fs/promises";
import { join } from "path";

import { UserData } from "../puck/config";

const CONTENT_DIR = join(process.cwd(), "content");

type PageRes = {
  status: number;
  data?: {
    data: UserData;
  };
};

// Maps a site path to its content file, mirroring the export script:
// "/" -> content/index.json, "/blog/foo" -> content/blog/foo.json
const pathToFile = (path: string) => {
  const slug = path.replace(/^\/+/, "").replace(/\/+$/, "") || "index";

  return join(CONTENT_DIR, `${slug}.json`);
};

export const getPageRes = async (path: string): Promise<PageRes> => {
  try {
    const raw = await readFile(pathToFile(path), "utf8");

    return { status: 200, data: { data: JSON.parse(raw) as UserData } };
  } catch {
    return { status: 404 };
  }
};
