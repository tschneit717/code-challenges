

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
    // Set a null head to start behind
    let nullHead = new ListNode(-1);
    // let the next node in null be the start of the actual node
    nullHead.next = head;
    // result for tracking
    let resultHead = nullHead;
    // counter for iteration
    let counter = 0
    // start the tail at the head
    let tail = head;
    // Increment the counter until you are n steps ahead of the head, setting the tail node
    while (counter < n) {
        counter++
        tail = tail.next
    } 
    // set a node to be removed
    let removeNode = head;
    // set a previous head to follow behind the remove node so that you know when to remove a node
    let prev = nullHead;
    // while tail is not null, iterate over
    // This will set every node to the next one until the tail reaches the end
    // The result of this is that our nodes will be in place, as tail will be n ahead of the remove node
    while (tail) {
        tail = tail.next;
        removeNode = removeNode.next;
        prev = prev.next;
    }
    // Update the prev node to skip over the remove node
    prev.next = removeNode.next;
    // returns the result head, starting at next
    return resultHead.next
};

const samples = [
    { head: [0, 1, 2, 3, 4, 5], n: 4 },
    { head: [0], n: 0 },
    { head: [1, 2, 5, 6, 2], n:  2}
]

samples.forEach(item => {
    const list = createListNode(item.head)
    removeNthFromEnd(list, item.n)
})