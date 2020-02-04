import arg from "arg";

const schema = {
  "-o": "--out-file",
  "-q": "--quiet",

  "--quiet": Boolean,
  "--esm": Boolean,
  "--out-file": String,
  "--mode": String
};

class CommandLineArguments {
  constructor() {
    this.args = {};
    this.rawArgs = {};
  }

  build(argv) {
    this.rawArgs = arg(schema, {
      argv: argv.slice(2)
    });
    return this._parse();
  }

  _parse() {
    this.args.mode = this.rawArgs["--mode"];
    this.args.outFile = this.rawArgs["--out-file"];
    this.args.quietMode = this.rawArgs["--quiet"];
    this.args.esm = this.rawArgs["--esm"];
    if (!this.args.mode) {
      this.args.mode = "default";
    }
    if (!this.args.outFile) {
      this.args.outFile = null;
    }
    this.args.quietMode = !!this.args.quietMode;
    this.args.files = this.rawArgs._.slice(0, 2);
    this.args.esm = !!this.args.esm;
    return this;
  }

  validate() {
    const errors = [];
    if (this.args.files.length != 2) {
      errors.push(`Both file paths are needed for comparison`);
    }
    if (!["default", "csv", "json"].includes(this.args.mode)) {
      errors.push(`Unsupported value: ${this.args.mode} for option: --mode`);
    } else if (this.args.mode !== "default" && !this.args.outFile) {
      errors.push(
        "Required option: `--out-file` if `--mode` is `json` or `csv`"
      );
    }
    return errors;
  }
}

export default new CommandLineArguments();
