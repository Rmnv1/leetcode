// 206. Reverse Linked List

// Дан head односвязный список, переверните его и верните перевернутый список.

/**
 * @param {ListNode} head
 * @return {ListNode}
 **/

var reverseList = function (head) {
  if (!head) return head;
  let prev = null;
  let current = head;

  while (current) {
    let nxt = current.next;
    current.next = prev;
    prev = current;
    current = nxt;
  }
  return prev;
};
