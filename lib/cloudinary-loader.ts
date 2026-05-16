// Custom next/image loader for static export (no Vercel image service).
// Cloudinary assets get a width/quality transformation injected so the
// generated srcset is delivered straight from Cloudinary; any non-Cloudinary
// src is passed through untouched.

const CLOUDINARY_PREFIX =
  "https://res.cloudinary.com/measuredco/image/upload/";

type LoaderArgs = { src: string; width: number; quality?: number };

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: LoaderArgs): string {
  if (!src.startsWith(CLOUDINARY_PREFIX)) {
    return src;
  }

  const rest = src.slice(CLOUDINARY_PREFIX.length);
  const transforms = [
    "f_auto",
    `q_${quality || "auto"}`,
    "c_limit",
    `w_${width}`,
  ].join(",");

  return `${CLOUDINARY_PREFIX}${transforms}/${rest}`;
}
