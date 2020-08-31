const sortByText = require('./sortByText').sortByText;
describe(':sortText', () => {
  it('Should return a string in alphabetic order', () => {
    const unOrdered = 'bark';
    const ordered = 'abkr';

    const result = sortByText(unOrdered);

    expect(result).toBe(ordered);
  })
});