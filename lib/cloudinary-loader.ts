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

  // `resolveSrc()` in components/Image may already prepend "f_auto,q_auto/".
  // Strip a leading transform group made only of f_auto / q_* tokens so we
  // don't emit a duplicate — this loader sets format/quality/width below.
  const rest = src
    .slice(CLOUDINARY_PREFIX.length)
    .replace(/^(?:f_auto|q_[^,/]+)(?:,(?:f_auto|q_[^,/]+))*\//, "");
  const transforms = [
    "f_auto",
    `q_${quality || "auto"}`,
    "c_limit",
    `w_${width}`,
  ].join(",");

  return `${CLOUDINARY_PREFIX}${transforms}/${rest}`;
}
