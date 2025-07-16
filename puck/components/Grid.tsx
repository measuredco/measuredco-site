import { ComponentConfig } from "@measured/puck";
import { ReactNode } from "react";

import {
  Grid as _Grid,
  GridProps as _GridProps,
  GridItemProps as _GridItemProps,
  gridClassName,
} from "../../components";

export type GridProps = _GridProps;

export const Grid: ComponentConfig<GridProps> = {
  defaultProps: {
    gap: "default",
  },
  fields: {
    gap: {
      options: [
        { label: "Default", value: "default" },
        { label: "Large", value: "large" },
        { label: "Uniform", value: "uniform" },
        { label: "None", value: "none" },
      ],
      type: "select",
    },
  },
  render: ({ gap, puck: { renderDropZone } }) => (
    <_Grid gap={gap}>
      {
        renderDropZone({
          className: gridClassName(gap),
          allow: ["GridItem"],
          zone: "grid",
        }) as ReactNode
      }
    </_Grid>
  ),
};

export type GridItemProps = _GridItemProps;

const itemOptions = [
  { label: "", value: "" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
];

export const GridItem: ComponentConfig<GridItemProps> = {
  defaultProps: {
    align: "start",
    justify: "start",
  },
  fields: {
    colSpan: {
      type: "select",
      options: itemOptions,
    },
    colStart: {
      type: "select",
      options: itemOptions,
    },
    colSpanNarrow: {
      type: "select",
      options: itemOptions,
    },
    colStartNarrow: {
      type: "select",
      options: itemOptions,
    },
    rowSpan: {
      type: "select",
      options: itemOptions,
    },
    rowStart: {
      type: "select",
      options: itemOptions,
    },
    align: {
      type: "radio",
      options: [
        { label: "Start", value: "start" },
        { label: "Center", value: "center" },
        { label: "End", value: "end" },
      ],
    },
    justify: {
      type: "radio",
      options: [
        { label: "Start", value: "start" },
        { label: "Center", value: "center" },
        { label: "End", value: "end" },
      ],
    },
  },
  inline: true,
  label: "Item",
  render: ({
    align,
    colSpan,
    colSpanNarrow,
    colStart,
    colStartNarrow,
    justify,
    puck: { dragRef, renderDropZone },
    rowSpan,
    rowStart,
  }) => (
    <_Grid.Item
      align={align}
      colSpan={colSpan}
      colSpanNarrow={colSpanNarrow}
      colStartNarrow={colStartNarrow}
      colStart={colStart}
      justify={justify}
      rowSpan={rowSpan}
      rowStart={rowStart}
      ref={dragRef}
    >
      {
        renderDropZone({
          disallow: ["Grid", "GridItem", "Section"],
          zone: "grid-item",
        }) as ReactNode
      }
    </_Grid.Item>
  ),
};
