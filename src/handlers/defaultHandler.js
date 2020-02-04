class DefaultHandler {
  constructor(options = {}) {
    this.options = options;
  }

  handle(input = []) {
    if (!input.length) {
      return;
    }
    if (input.length) {
      console.log(`fileA: ${input[0].fileA}`);
      console.log(`fileB: ${input[0].fileB}\n`);
    }
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
