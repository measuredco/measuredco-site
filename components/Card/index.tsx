import classNames from "classnames";
import Link from "next/link";

import { Paragraph, Space } from "..";

import "./Card.css";

const Card = ({ description, headingLevel = "3", link, note = "", title }) => {
  const HeadingElement = `h${headingLevel}` as any;

  return (
    <div className={classNames({ "msrd-Card": true })}>
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
