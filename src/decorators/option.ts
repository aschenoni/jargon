import type Jargon from '../Jargon';

export function option(target: Jargon, key: string): void {
  target.options = target.options || [];
  target.options.push(key);
  target.parse();
}
