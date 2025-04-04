const nodejs = "data:image/png;base64,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";
export {
  nodejs as default
};
//# sourceMappingURL=technology-node.png.mjs.map
