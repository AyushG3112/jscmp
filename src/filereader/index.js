export const readFile = function readFile(filePath, { esm } = { esm: false }) {
  const fileData = require(filePath);
  if (esm) {
    return fileData.default;
  }
  return fileData;
};
