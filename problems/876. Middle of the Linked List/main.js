// 876. Middle of the Linked List

// Учитывая head односвязный список, вернуть средний узел связанного списка.

// Если имеется два средних узла, вернуть второй средний узел.

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function (head) {
  // main solution
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;

  // second solution
  // let size = 0
  // let current = head
  // while (current.next) {
  //     current = current.next
  //     size++
  // }

  // current = head

  // let halfSize = Math.ceil(size/2)
  // while (halfSize--) {
  //     current = current.next
  // }

  // return current
};
