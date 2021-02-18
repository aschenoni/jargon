import type Jargon from '../Jargon';

export function required(target: Jargon, key: string): void {
  target.requiredArgCount = target.requiredArgCount || 0;
  target.requiredArgCount++;
}
