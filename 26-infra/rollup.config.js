export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/bundle.cjs.js",
      format: "cjs",
    },
  },
  {
    input: "src/index.js",
    output: {
      file: "dist/bundle.amd.js",
      format: "amd",
    },
  },
];
