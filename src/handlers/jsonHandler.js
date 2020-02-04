const fs = require("fs");
const path = require("path");

class JSONHandler {
  constructor(options = {}) {
    this.options = options;
  }

  handle(input = []) {
    if (!input.length) {
      return;
    }
    fs.writeFileSync(
      path.resolve(this.options.outFile),
      JSON.stringify(input, null, 2)
    );
  }
}

export default JSONHandler;
