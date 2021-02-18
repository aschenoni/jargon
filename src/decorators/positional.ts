import type Jargon from '../Jargon';

export function positional(target: Jargon, key: string): void {
  target.positionals = target.positionals || [];
  target.positionals.push(key);
  target.parse();
}
