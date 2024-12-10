import classNames from "classnames";

import "./Rule.css";

export type RuleProps = {
  align?: "left" | "center" | "right";
};

const Rule = ({ align = "left" }: RuleProps) => {
  return (
    <hr
      className={classNames({
        "msrd-Rule": true,
        [`msrd-Rule--${align}`]: align && align !== "left",
      })}
    />
  );
};

export default Rule;
