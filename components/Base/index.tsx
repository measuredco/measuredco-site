import { PropsWithChildren } from "react";

import "./Base.css";

type BaseProps = {
  body?: boolean;
  className?: string;
};

const Base = ({
  body = false,
  children,
  className = "msrd",
}: PropsWithChildren<BaseProps>) => {
  let Element: any = "div";

  if (body) {
    Element = "body";
  }

  return <Element className={className}>{children}</Element>;
};

export default Base;
