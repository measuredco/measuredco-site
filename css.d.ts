// Ambient declaration for CSS side-effect imports (`import "./x.css"`,
// `import "@measured/calibrate-core/styles.css"`). Required because the
// shared tsconfig uses `moduleResolution: "node"`, which can't resolve
// non-TS assets; without this the TS language service reports 2882 on
// every CSS import. Next.js handles the actual bundling at build time.
declare module "*.css";
