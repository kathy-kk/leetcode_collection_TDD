// Later: how to do tests without a test library

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

// const maxProfit = prices => {
//   return prices.reduce((acc, value, index) => {
//     let lowest = acc.lowest;
//     let maxProfit = acc.maxProfit;
//      return {
//        lowest:value<lowest?value:lowest,
//        maxProfit:value-lowest>maxProfit?value-lowest:maxProfit
//      }
//   },{lowest:prices[0],maxProfit:0}).maxProfit
// };

const maxProfit = prices => prices.reduce((acc, value, index) => ({lowest:value<acc.lowest?value:acc.lowest,maxProfit:value-acc.lowest>acc.maxProfit?value-acc.lowest:acc.maxProfit}),{lowest:prices[0],maxProfit:0}).maxProfit;
