import { PropsWithChildren } from "react";

import "./Date.css";

const Date = ({ children }: PropsWithChildren) => (
  <div className="msrd-Date">
    <strong className="msrd-Date-label">Date</strong> {children}
  </div>
);

export default Date;
