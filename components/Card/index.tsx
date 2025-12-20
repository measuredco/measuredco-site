import classNames from "classnames";
import Link from "next/link";
import { ElementType } from "react";

import { Paragraph, Space } from "..";

import "./Card.css";

type CardProps = {
  description: string;
  graphic?: boolean;
  headingLevel?: "1" | "2" | "3" | "4" | "5" | "6" | "";
  link?: string;
  note?: string;
  title: string;
};

const Card = ({
  description,
  graphic,
  headingLevel = "3",
  link,
  note = "",
  title,
}: CardProps) => {
  const HeadingElement: ElementType = headingLevel
    ? (`h${headingLevel}` as ElementType)
    : "div";

  return (
    <div
      className={classNames({
        "msrd-Card": true,
        "msrd-Card--graphic": graphic,
      })}
    >
      <div className="msrd-Card-inner">
        <span className="msrd-Card-dots">
          <span className="msrd-Card-dotsInner" />
        </span>
        <HeadingElement className="msrd-Card-heading">
          {link ? (
            <Link href={link} className="msrd-Card-Heading-link">
              {title}
            </Link>
          ) : (
            title
          )}
        </HeadingElement>
        <Space size="03" />
        <Paragraph size="small">{description}</Paragraph>
        {note ? (
          <>
            <Space size="03" />
            <div className="msrd-Card-note">
              <Paragraph size="small">{note}</Paragraph>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
