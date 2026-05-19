import { PropsWithChildren } from "react";

import { Surface as ClbrSurface } from "@measured/calibrate-react";

import "./Surface.css";

type SurfaceProps = {
  background?: "dark" | "graphicDark" | "";
};

const Surface = ({ background, children }: PropsWithChildren<SurfaceProps>) => {
  if (background === "graphicDark") {
    return (
      <ClbrSurface variant="brand" contentTheme="dark">
        <div className="msrd-Surface-graphic">{children}</div>
      </ClbrSurface>
    );
  }

  return (
    <ClbrSurface variant={background === "dark" ? "brand" : "default"}>
      {children}
    </ClbrSurface>
  );
};

export default Surface;
