const fs = require("fs");
const path = require("path");
const { parse } = require("json2csv");

class CSVHandler {
  constructor(options = {}) {
    this.options = options;
  }

  handle(input = []) {
    if (!input.length) {
      return;
    }
    const fields = Object.keys(input[0]);
    fs.writeFileSync(path.resolve(this.options.outFile), parse(input, fields));
  }
}

export default CSVHandler;
