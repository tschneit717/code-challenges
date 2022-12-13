/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


const samples = [
  [l1 = [2, 4, 3], l2 = [5, 6, 4]],
  [l1 = [0], l2 = [0]],
  [l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]],
];


class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

const createSamples = (sample) => {
  return sample.map(item => {
    return item.reduceRight((next, val) => ({ val, next }), null);
  })
}

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let prevNode = new ListNode()
  const head = prevNode;
  while (l1 !== null || l2 !== null || carry !== 0) {
    let val1 = 0;
    let val2 = 0;
    if (l1 !== null) {
      val1 = l1.val
      l1 = l1.next
    }
    if (l2 !== null) {
      val2 = l2.val
      l2 = l2.next
    }
    const sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;
    const digit = sum % 10;
    const currentNode = new ListNode(digit)
    prevNode.next = currentNode;
    prevNode = currentNode;
  };
  return head.next
}

samples.forEach((sample) => {
  const tests = createSamples(sample);
  console.log(addTwoNumbers(tests[0], tests[1]));
});
