import type Jargon from '../Jargon';

export function alias(
  ...aliases: string[]
): (target: Jargon, key: string) => void {
  return function (target: Jargon, key: string): void {
    aliases.forEach((alias) => {
      Object.defineProperty(target, alias, {
        get() {
          return this[key];
        },
        set(newValue) {
          this[key] = newValue;
        },
      });
    });
    target.parse();
  };
}
