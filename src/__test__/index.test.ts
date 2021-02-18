import Jargon from '..';

describe('unit | Jargon', () => {
  it('creates an Jargon', () => {
    let jargon = new Jargon();
    expect(jargon).toBeInstanceOf(Jargon);
  });
});
