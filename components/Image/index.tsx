import classNames from "classnames";
import NextImage, { StaticImageData } from "next/image";
import { HTMLAttributes, PropsWithChildren } from "react";

import "./Image.css";

const CDN_PREFIX = "https://res.cloudinary.com/measuredco/image/upload";

const hasTransformParam = (path: string, param: string) => {
  const pattern = new RegExp(`(^|[,/])${param}($|[,/:])`);

  return pattern.test(path);
};

const resolveSrc = (src: string | StaticImageData) => {
  if (typeof src !== "string") {
    return src;
  }

  if (!src) {
    return src;
  }

  const cleanSrc = src.trim();

  if (!cleanSrc.startsWith(CDN_PREFIX)) {
    return cleanSrc;
  }

  const uploadPath = cleanSrc.slice(CDN_PREFIX.length);
  const uploadPathNormalized = uploadPath.startsWith("/")
    ? uploadPath.slice(1)
    : uploadPath;
  const hasAutoFormat = hasTransformParam(uploadPathNormalized, "f_auto");
  const hasAutoQuality = hasTransformParam(uploadPathNormalized, "q_auto");

  if (hasAutoFormat && hasAutoQuality) {
    return cleanSrc;
  }

  const paramsToAdd: string[] = [];

  if (!hasAutoFormat) {
    paramsToAdd.push("f_auto");
  }

  if (!hasAutoQuality) {
    paramsToAdd.push("q_auto");
  }

  if (paramsToAdd.length === 0) {
    return cleanSrc;
  }

  return `${CDN_PREFIX}/${paramsToAdd.join(",")}/${uploadPathNormalized}`;
};

/**
 * Use `Image` to render a single image, or set of images, with support for
 * image fitting and art direction.
 */
const Image = ({
  alt,
  aspectRatio,
  anchor = "C",
  children,
  fillColor,
  fit,
  height,
  overlay,
  priority,
  sizes,
  src,
  width,
}: PropsWithChildren<ImageProps>) => {
  const resolvedSrc = resolveSrc(src);
  const img = resolvedSrc ? (
    <NextImage
      className="msrd-Image-img"
      alt={alt}
      height={fit === "cover" ? undefined : height}
      fill={fit === "cover" ? true : false}
      priority={priority}
      sizes={children ? undefined : sizes}
      src={resolvedSrc}
      width={fit === "cover" ? undefined : width}
    />
  ) : null;

  return (
    <div
      className={classNames({
        "msrd-Image": true,
        "msrd-Image--cover": fit === "cover",
        [`msrd-Image--anchor${anchor}`]: fit === "cover",
        [`msrd-Image--${overlay || ""}`]: overlay,
      })}
      style={{
        ...(fit === "cover" && aspectRatio && { aspectRatio }),
        ...(fillColor && { backgroundColor: fillColor }),
        ...(fit === "cover" && height && !aspectRatio
          ? { height: `${height}px` }
          : null),
        ...(fit === "cover" && width && !aspectRatio
          ? { width: `${width}px` }
          : null),
      }}
    >
      {children ? (
        <picture>
          {children} {img}
        </picture>
      ) : (
        <>{img}</>
      )}
    </div>
  );
};

export const ImageSource = ({
  height,
  media,
  srcSet,
  sizes,
  type,
}: ImageSourceProps) => {
  return (
    <source
      height={height}
      media={media}
      sizes={sizes}
      srcSet={srcSet}
      type={type}
    />
  );
};

ImageSource.displayName = "Image.Source";
Image.Source = ImageSource;

export type ImageSourceProps = {
  /**
   * The intrinsic height of the ImageSource, in pixels
   */
  height?: number;

  /**
   * Media condition (similar to a media query) that the user agent will evaluate for each ImageSource element. Same format as [media](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#attr-media), i.e. `(min-width: 600px)`
   */
  media?: string;

  /**
   * The HTML [sizes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#attr-sizes) attribute. Only required if srcSet is switching widths.
   */
  sizes?: string;

  /**
   * A comma-separated list indicating a set of possible sources for the user agent to use for different screen sizes for the ImageSource element. Same format as [srcSet](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#attr-srcset), i.e. `my-image-200.png 200w, my-image-200.png 200w`.
   */
  srcSet: string;

  /**
   * MIME type for the resource URL(s) in the ImageSource element's srcset attribute. If the user agent does not support the given type, the element is skipped. Same format as [type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#attr-type), i.e. `image/jpeg`.
   */
  type?: string;
};

export interface ImageProps extends HTMLAttributes<HTMLElement> {
  /**
   * Alternative text for the Image, shown if the image cannot be displayed.
   */
  alt: string;

  /**
   * Anchor point for the Image if using fit="cover".
   */
  anchor?: "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW" | "C";

  /**
   * CSS aspect-ratio for the Image. Useful for fit="cover" when width/height
   * dimensions are unknown.
   */
  aspectRatio?: string;

  /**
   * Fallback hexadecimal fill color. The intent is to increase perceived loading speed. Do not use on images with transparency. Requires that an explicit width and height be set for the image.
   */
  fillColor?: string;

  /**
   * Fit of the Image.
   */
  fit?: "cover" | "";

  /**
   * Height dimension of the Image, in pixels. If fit="cover", the height in which
   * to fit the Image. Otherwise, the intrinsic height of the Image element.
   */
  height?: number;

  /**
   * Apply an overlay to the Image, e.g. a scrim gradient for text legibility.
   * Should not be used if the image has a rasterized overlay.
   */
  overlay?: "scrimBottomDark";

  /**
   * When true, the Image will be considered high priority and preload
.  * Lazy loading is automatically disabled for images using priority.
   */
  priority?: boolean;

  /**
   * The HTML [sizes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Example_4_Using_the_srcset_and_sizes_attributes) attribute. Ignored if `children` (<source> elements) are present.
   */
  sizes?: string;

  /**
   * Image `src`.
   */
  src: string | StaticImageData;

  /**
   * Width dimension of the Image, in pixels. If fit="cover", the width in which
   * to fit the Image. Otherwise, the intrinsic width of the Image element.
   */
  width?: number;
}

export default Image;
