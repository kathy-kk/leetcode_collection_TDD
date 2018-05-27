const test = require('tape');

test('should sell on second day', t => {
  const prices = [1, 9];
  const result = maxProfit(prices);
  t.equal(result, 8);
  t.end()
});

test('should sell on the third day', t => {
  const prices = [9, 1, 5];
  const result = maxProfit(prices);
  t.equal(result, 4);
  t.end()
})
test('should sell the last and buy the first lowest', t => {
  const prices = [9, 1, 6, 7];
  const result = maxProfit(prices);
  t.equal(result, 6);
  t.end()
})

test('should buy the first lowest and sell the remaining hightest', t => {
  const prices = [9, 1, 6, 7, 5];
  const result = maxProfit(prices);
  t.equal(result, 6);
  t.end()
})
test('shoud buy at 1 sell at 7 and buy at 5 and sell at 8', t => {
  const prices = [9,1,6,7,5,8];
  const result = maxProfit(prices);
  t.equal(result,9);
  t.end()
})

const maxProfit = prices => (prices.reduce((acc, value, index) => ( { profit : value > acc.previous ? acc.profit+value-acc.previous:acc.profit,previous :value}),{previous:prices[0], profit:0}).profit)