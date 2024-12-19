import classNames from "classnames";
import { forwardRef, PropsWithChildren } from "react";

import "./Grid.css";

export type GridProps = {
  gap?: "default" | "large" | "uniform" | "none";
};

export const gridClassName = (gap: GridProps["gap"]) =>
  classNames({
    ["msrd-Grid"]: true,
    [`msrd-Grid--gap${gap ? gap.charAt(0).toUpperCase() + gap.slice(1) : ""}`]:
      gap && gap !== "default",
  });

const Grid = ({ children, gap }: PropsWithChildren<GridProps>) => (
  <div className={gridClassName(gap)}>{children}</div>
);

export type GridItemProps = {
  align?: "center" | "end" | "start";
  colSpan?:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
  colSpanNarrow?:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
  colStart?:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
  colStartNarrow?:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
  isDebugVisible?: boolean;
  justify?: "center" | "end" | "start";
  rowSpan?:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
  rowStart?:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
};

const GridItem = forwardRef<HTMLDivElement, PropsWithChildren<GridItemProps>>(
  (
    {
      align,
      children,
      colSpan,
      colSpanNarrow,
      colStart,
      colStartNarrow,
      justify,
      rowSpan,
      rowStart,
      isDebugVisible,
    },
    ref
  ) => {
    return (
      <div
        className={classNames({
          ["msrd-GridItem"]: true,
          [`msrd-GridItem--align${
            align ? align.charAt(0).toUpperCase() + align.slice(1) : ""
          }`]: align && align !== "start",
          [`msrd-GridItem--colSpan${colSpan || ""}`]: colSpan,
          [`msrd-GridItem--colSpanNarrow${colSpanNarrow || ""}`]: colSpanNarrow,
          [`msrd-GridItem--colStart${colStart || ""}`]: colStart,
          [`msrd-GridItem--colStartNarrow${colStartNarrow || ""}`]:
            colStartNarrow,
          ["msrd-GridItem--debugVisible"]: isDebugVisible,
          [`msrd-GridItem--align${
            justify ? justify.charAt(0).toUpperCase() + justify.slice(1) : ""
          }`]: justify && justify !== "start",
          [`msrd-GridItem--rowSpan${rowSpan || ""}`]: rowSpan,
          [`msrd-GridItem--rowStart${rowStart || ""}`]: rowStart,
        })}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

Grid.Item = GridItem;
GridItem.displayName = "Grid.Item";

export default Grid;
