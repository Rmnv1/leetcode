// 707. Design Linked List

// Необходимо спроектировать Linked List.

// Не буду копировать сюда полные условия, а то получится слишком объемно и нечитаемо

class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (index < 0 || index >= this.size) return -1;

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current.value;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    const newNode = new LinkedListNode(val, this.head);

    this.head = newNode;

    if (this.size === 0) {
      this.tail = newNode;
    }

    this.size++;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    const newNode = new LinkedListNode(val);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.tail;
      current.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    if (index < 0 || index > this.size) return -1;

    if (index === 0) {
      this.addAtHead(val);
      return;
    }
    if (index === this.size) {
      this.addAtTail(val);
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    const newNode = new LinkedListNode(val, current.next);
    current.next = newNode;

    this.size++;
  }

  /**
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return false;
    if (index === 0) {
      this.head = this.head.next;

      if (this.size === 1) {
        this.tail = null;
      }
    } else {
      let current = this.head;

      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }

      current.next = current.next.next;

      if (index === this.size - 1) {
        this.tail = current;
      }
    }

    this.size--;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
