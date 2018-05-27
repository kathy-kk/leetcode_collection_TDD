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
test('shoud buy at 1 sell at 8 and buy at 6 and sell at 9 or buy at 1 sell at 7 and buy at 5 and sell at 9(2 transactions at most)', t => {
  const prices = [9,1,6,7,5,8,6,9];
  const result = maxProfit(prices);
  t.equal(result,10);
  t.end()
})

const submaxProfit = prices => {
  return prices.reduce((acc, value, index) => {
    let lowest = acc.lowest;
    let maxProfit = acc.maxProfit;
     return {
       lowest:value<lowest?value:lowest,
       maxProfit:value-lowest>maxProfit?value-lowest:maxProfit
     }
  },{lowest:prices[0],maxProfit:0}).maxProfit
};


// const maxProfit = prices => (prices.
//   reduce((acc, value, index) => 
//        {  
//   return { profit : value > acc.previous ? acc.profit+value-acc.previous:acc.profit,
//            previous :value}},
//          {previous:prices[0], profit:0}).profit)
const maxProfit = prices => {
  return prices.reduce((acc, value, index) => {
        return {
          maxProfit2:value-acc.lowest2>acc.maxProfit2?value-acc.lowest2:acc.maxProfit2,
          lowest2: value-acc.maxProfit1<acc.lowest2?value-acc.maxProfit1:acc.lowest2,
          maxProfit1:value-acc.lowest1>acc.maxProfit1?value-acc.lowest1:acc.maxProfit1,
          lowest1:value<acc.lowest1?value:acc.lowest1
        }
  },{lowest1:Infinity,maxProfit1:0, lowest2:Infinity ,maxProfit2:0}).maxProfit2; 
 
}

// const maxProfit = prices =>  {
//   const add = (a,b) => {
//     return a+b
//   }
//   return prices.reduce((acc, value, index) => {
//         let previous = acc.previous;
//         let rising = acc.rising;
//         let newRising = value>previous?(rising.length>0?rising.concat(value):rising.concat(previous).concat(value)):[];
//        // let risingList = acc.risingList
//         let risingProfit = 0;
//         if(index==prices.length-1&&newRising.length>1){
//            // acc.risingList.push(newRising);
//            acc.risingList = [...acc.risingList, newRising];
//            risingProfit = newRising[newRising.length-1]-newRising[0]
//            if(risingProfit > acc.profit[0]){
//              acc.profit[0] = risingProfit;
//              acc.profit.sort();
//            }
//         }
//         if((newRising.length==0&&rising.length!=0)){
//          // acc.risingList.push(rising);
//            acc.risingList = [...acc.risingList,rising]
//            risingProfit = rising[rising.length-1]-rising[0]
//            if(risingProfit > acc.profit[0]){
//              acc.profit[0] = risingProfit;
//              acc.profit.sort()
//            }
//         }
       
//         acc.rising = newRising;
//         acc.previous = value;
//         console.log(acc)
//         return acc;
//   },{previous:prices[0],rising:[],risingList:[],profit:[0,0]}).profit.reduce(add,0);

 

// if(result.length == 1){
//   return result[0][result[0].length-1]-result[0][0];
// }
//  const midIndex = Math.floor(result.length/2)
//  const mid = result[midIndex];
//  const midLow = mid[0];
//  const leftLow = result[0][0]
//  const leftHigh = result[midIndex-1]
 
// return 0

