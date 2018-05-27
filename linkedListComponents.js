const test = require('tape');
const ListNode = (val) => {
       this.val = val;
       this.next = null;
}
const List = (val) => {
    const listNode = new ListNode(val);
    this._root = listNode;
}

test('should return an object of starting points ', t => {  
  
  t.deepEqual(result, ['a','b','c']);
  t.end();
});