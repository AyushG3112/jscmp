class DefaultHandler {
  constructor(options = {}) {
    this.options = options;
  }

  handle(input = []) {
    for (let item of input) {
      switch (item.type) {
        case "missing":
          console.log(
            `Field: ${item.field} missing.\nType in fileA: ${item.typeA}.\nType in fileB: ${item.typeB}.\n`
          );
          break;
        case "typeMismatch":
          console.log(
            `Field: ${item.field} has different types in both files.\nType in fileA: ${item.typeA}.\nType in fileB: ${item.typeB}.\n`
          );
          break;
      }
    }
  }
}

export default DefaultHandler;
