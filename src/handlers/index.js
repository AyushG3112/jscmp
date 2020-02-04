import DefaultHandler from "./defaultHandler";

export default function getHandler(options = {}) {
  return new DefaultHandler(options);
}
