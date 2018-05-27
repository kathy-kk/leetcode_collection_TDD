
const test = require('tape');

test('should return letters of digit 2', t => {
  const digits = '2'
  const result = letterCombniations(digits);
  t.deepEqual(result, ['a','b','c']);
  t.end()
});
test('should return letters of digit 3', t => {
  const digits = '3'
  const result = letterCombniations(digits);
  t.deepEqual(result, ['d','e','f']);
  t.end()
});
test('should return letters of digit 23', t => {
  const digits = '23'
  const result = letterCombniations(digits);
  t.deepEqual(result, ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
  t.end()
});
test('should return [] when "" is entered', t => {
  const digits = '';
  const result = letterCombniations(digits);
  t.deepEqual(result,[]);
  t.end();
})

const letterCombniations =  (digits) => {
  const mapping = {2:['a','b','c'],3:['d','e','f'],4:['g','h','i'],5:['j','k','l'],
                   6:['m','n','o'],7:['p','q','r','s'],8:['t','u','v'],9:['w','x','y','z']};
  
  if(digits.length == 1){
    if(mapping[digits])
    return mapping[digits]
    else return []
  }
  if(digits.length == 0){
    return []
  }
  const currentDigit = digits[0]
  const currentLetters = mapping[currentDigit]
 // const currentResults = letterCombniations(digits.slice(1));
  
  return currentLetters.reduce((acc, letter) => {
       return  acc.concat( letterCombniations(digits.slice(1)).map((result) => {
             return letter+result;
       }))
  },[])
}