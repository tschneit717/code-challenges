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
  [(l1 = [2, 4, 3]), (l2 = [5, 6, 4])],
  [(l1 = [0]), (l2 = [0])],
  [(l1 = [9, 9, 9, 9, 9, 9, 9]), (l2 = [9, 9, 9, 9])],
];

var addTwoNumbers = function (l1, l2) {
  const listNode = (val, next) => {
    return {
      val: val === undefined ? 0 : val,
      next: next === undefined ? null : next,
    };
  };

  const linkedList = (head = null) => {
    return { head: head };
  };

  const createList = (list) => {
    let size = 0;
    let node;
    let count = list.length - 1;
    let linked = linkedList(listNode(list[count]));

    let current = linked.head;
    while (count > 0) {
      count--;
      node = listNode(list[count]);
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      size++;
    }
    return { linked, size };
  };

  let list1 = createList(l1);
  list2 = createList(l2);
  let count = 0;
  let current1 = list1.linked.head;
  let current2 = list2.linked.head;
  let activeValue1 = [];
  let activeValue2 = [];
  while (list2.size >= count || list1.size >= count) {
    if (current1) {
      activeValue1.push(current1.val);
      current1 = current1.next;
    }
    if (current2) {
      activeValue2.push(current2.val);
      current2 = current2.next;
    }

    count++;
  }
  const result =
    parseInt(activeValue1.join('')) + parseInt(activeValue2.join(''));
  createList(result.split(''));
};

samples.forEach((sample) => {
  addTwoNumbers(sample[0], sample[1]);
});
