require = require("esm")(module /*, options*/);
import argumentParser from "./argumentParser";
import processor from "./processor";
import getHandler from "./handlers";

export async function cli(args) {
  let exitCode = 1;
  try {
    const cliArgs = argumentParser.build(args);
    const errors = cliArgs.validate();
    if (!errors.length) {
      const result = processor(...cliArgs.args.files, cliArgs);
      await getHandler(cliArgs.args).handle(result);
      exitCode = 3;
      throw new Error(
        `Some differences found. Details have been sent to ${cliArgs.args
          .outFile || "console"}.`
      );
    } else {
      exitCode = 4;
      throw new Error(errors[0]);
    }
  } catch (e) {
    console.error(e);
    process.exit(exitCode);
  }
}
