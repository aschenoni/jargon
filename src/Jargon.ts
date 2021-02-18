export default class Jargon {
  [index: string]: any;
  options: string[] = [];
  positionals: string[] = [];

  parse(): void {
    let raw = process.argv.slice(2);

    let [positionalArgs, optionsArgs] = raw.reduce(
      (accum: [string[], string[]], val) => {
        if (/^-/.exec(val)) {
          accum[1].push(val);
        } else {
          accum[0].push(val);
        }
        return accum;
      },
      [[], []],
    );
    this.assertRequired(positionalArgs);
    this.assignOptions(optionsArgs);
    this.assignPositionals(positionalArgs, this.positionals);
    // console.log(optionsArgs, this.options);
    // console.log(positionalArgs, this.positionals);
  }

  assignOptions(optionsArgs: string[]): void {
    optionsArgs.forEach((option) => {
      let prop: string;
      let val;
      //handle double dash options
      if (/^--/.exec(option)) {
        option = option.replace('--', '');

        //boolean option
        if (!/=/.exec(option)) {
          prop = option;
          val = true;
        } else {
          [prop, val] = option.split('=');
        }
      } else {
        //single dash argument
        //doesn't support passing space delimited strings with single dash right now
        prop = option;
        val = true;
      }
      this[prop] = val;
    });
  }

  assignPositionals(positionalArgs: string[], positionals: string[]): void {
    if (!positionals) {
      return;
    }
    console.log(this.positionals);
    positionalArgs.forEach((arg, index) => {
      this[positionals[index]] = arg;
    });
  }

  assertRequired(positionalArgs: string[]): void {
    if (
      this.requiredArgCount &&
      this.requiredArgCount > positionalArgs.length
    ) {
      throw new Error('missing required parameters');
    }
  }
}
