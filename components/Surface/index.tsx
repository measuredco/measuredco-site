import { PropsWithChildren } from "react";

import "./Surface.css";

type SurfaceProps = {
  background?: "dark" | "graphicDark" | "";
};

const Surface = ({ background, children }: PropsWithChildren<SurfaceProps>) => {
  return (
    <div
      className={`msrd-Surface ${
        background ? `msrd-Surface--${background}` : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Surface;
