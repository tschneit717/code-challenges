/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

const samples = [
  {
    head: [1, 2, 3, 4, 5],
    n: 2
  },
  {
    head: [1],
    n: 1,
  },
  {
    head: [1, 2],
    n: 1,
  }
]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function createLinkedList(arr) {

  let node = new ListNode(arr[0], null)
  let current = node
  for (let i = 1; i < arr.length; i++) {
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }
  return node;
}

function removeNode(list, n) {
  let index = 0;
  let currentNode = list;
  while (index !== n) {
    if (currentNode) {
      currentNode = currentNode.next;
    }
    index++
  }
  if (index === n) {
    if (currentNode) {
      currentNode = currentNode.next
    } else {
      currentNode = null;
    }
  }
  return list
}

var removeNthFromEnd = function (head, n) {
  const list = createLinkedList(head)
  return removeNode(list, n)
};

samples.forEach((sample) => {
  console.log(removeNthFromEnd(sample.head, sample.n))
})




