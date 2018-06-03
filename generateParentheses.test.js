
const test = require('tape');

test('should return ["()"] if n equals to 1', t => {
  const n = 1;
  const result = new Set(generateParenthesis(n));
  t.deepEqual(result,new Set(["()"]));
  t.end()
});
test('should return ["(())","()()"] if n equals to 2', t => {
  const n = 2;
  const result = new Set(generateParenthesis(n));
  t.deepEqual(result, new Set(["(())","()()"]));
  t.end()
});

test('should renturn [ "((()))", "(()())","(())()","()(())", "()()()"] if n equals to 3', t => {
  const n = 3;
  const result = new Set(generateParenthesis(n));
  t.deepEqual(result, new Set([
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
  ]
  ));
  t.end();
})
var generateParenthesis = function(n) {
  if(n==1){
return ["()"]
}
const currentArray = generateParenthesis(n-1);

return currentArray.reduce((acc,parenthesis) => {
      for(var i=0;i<parenthesis.length-1;i++){
           if (parenthesis.slice(i,i+2)=="()"){
            const leftInside = parenthesis.slice(0,i+1)  //split from inside ()
            const rightInside = parenthesis.slice(i+1)
            const newParenthesisInside = leftInside.concat("()").concat(rightInside);

            const leftOutside = parenthesis.slice(0,i+2) //split from outside ()
            const rightOutside = parenthesis[i+2]?parenthesis.slice(i+2):""
            const  newParenthesisOutside = leftOutside.concat("()").concat(rightOutside);
            if(!acc.includes(newParenthesisInside))
            acc.push(newParenthesisInside);
            if(!acc.includes(newParenthesisOutside))
            acc.push(newParenthesisOutside);
           }
           
      }
 return acc
},[])
};