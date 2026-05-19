import { PropsWithChildren } from "react";

import { Root } from "@measured/calibrate-react";

import "./Base.css";

const Base = ({ children }: PropsWithChildren<unknown>) => (
  <Root appRoot appOverscrollBehavior="none" brand="msrd">
    {children}
  </Root>
);

export default Base;
