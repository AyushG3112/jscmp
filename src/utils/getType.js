export default function getType(input) {
  return Object.prototype.toString
    .call(input)
    .replace(/^\[object /, "")
    .replace(/\]/, "")
    .toLowerCase();
}
