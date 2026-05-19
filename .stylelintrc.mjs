// Enforce the project's `.msrd-` PascalCase BEM convention while still
// accepting kebab-case third-party / utility classes (`clbr`,
// `gfm-color-chip`, `task-list-item`, …):
//   - kebab-case:            clbr, gfm-color-chip, translated-rtl
//   - msrd block:            msrd-Card, msrd-SiteHeader  (or msrd-u-*)
//   - element(s)/modifier(s): -inner, -dotsInner, --gapLarge, --1
const SELECTOR_CLASS_PATTERN =
  "^(clbr|[a-z][a-z0-9]*(-[a-z0-9]+)*|msrd-([A-Z][a-zA-Z0-9]*|u)(-[a-zA-Z0-9]+)*(--[a-zA-Z0-9]+)*)$";

export default {
  extends: ["@measured/calibrate-config/stylelint"],
  // Puck NewIdentity blocks are legacy and out of scope for token
  // conformance — lint only the live component library.
  ignoreFiles: ["puck/**", "**/node_modules/**", "out/**", ".next/**"],
  rules: {
    "selector-class-pattern": [
      SELECTOR_CLASS_PATTERN,
      {
        message:
          "Expected class to follow the `.msrd-` PascalCase BEM convention (or be a kebab-case third-party/utility class)",
      },
    ],
  },
};
