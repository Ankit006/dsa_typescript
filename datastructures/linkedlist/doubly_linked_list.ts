type elementData = string | number;

class NodeElement {
  element: elementData;
  previous: NodeElement | null;
  next: NodeElement | null;

  constructor(element: elementData) {
    this.element = element;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  head: NodeElement;
  tail: NodeElement;
  size: number;
  constructor() {
    const newNode = new NodeElement("no data");
    this.head = newNode;
    this.tail = newNode;
    this.size = 0;
  }

  push(element: elementData) {
    const newNode = new NodeElement(element);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  pop() {
    if (this.size === 0) return;
    if (this.size === 1) {
      const newNode = new NodeElement("no data");
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail.previous) {
        const newTailNode: NodeElement = this.tail.previous;
        this.tail = newTailNode;
        this.tail.next = null;
      }
    }
    this.size--;
  }

  shift() {
    if (this.size === 0) return;
    if (this.size === 1) {
      const newNode = new NodeElement("no data");
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.head.next) {
        const newHeadElement: NodeElement = this.head.next;
        this.head = newHeadElement;
        this.head.previous = null;
      }
    }
    this.size--;
  }

  unShift(element: elementData) {
    const newNodeElement = new NodeElement(element);
    if (this.size === 0) {
      this.head = newNodeElement;
      this.tail = newNodeElement;
    } else {
      const tmpHead: NodeElement = this.head;
      this.head = newNodeElement;
      this.head.next = tmpHead;
      tmpHead.previous = this.head;
    }
    this.size++;
  }

  get(pos: number): NodeElement | null {
    if (pos > this.size - 1 || pos < 0) return null;
    if (pos === 0) return this.head;
    if (pos === this.size - 1) return this.tail;
    if (pos > this.size - 1 - pos) {
      let counter = this.size - 1;
      let resultElement: NodeElement = this.tail;
      while (counter !== pos && resultElement.previous) {
        resultElement = resultElement.previous;
        counter--;
      }
      return resultElement;
    } else {
      let counter = 0;
      let resultElement: NodeElement = this.head;
      while (counter !== pos && resultElement.next) {
        resultElement = resultElement.next;
        counter++;
      }
      return resultElement;
    }
  }
  set(element: elementType, pos: number) {
    const data: NodeElement | null = this.get(pos);
    if (data) {
      data.element = element;
    }
  }
  insert(element: elementType, pos: number) {
    if (pos > this.size - 1 || pos < 0) return;
    if (pos === 0) {
      this.unShift(element);
      this.size++;
      return;
    }
    if (pos === this.size - 1) {
      this.push(element);
      this.size++;
      return;
    }

    const currentPosElement = this.get(pos);
    if (currentPosElement) {
      if (currentPosElement.previous && currentPosElement.next) {
        const newNodeElement: NodeElement = new NodeElement(element);
        currentPosElement.previous.next = newNodeElement;
        newNodeElement.previous = currentPosElement.previous;
        newNodeElement.next = currentPosElement;
        currentPosElement.previous = newNodeElement;
        return;
      }
    }
  }

  remove(pos: number) {
    if (pos > this.size - 1 || pos < 0) return;
    if (pos === 0) return this.shift();
    if (pos === this.size - 1) return this.pop();

    const posElement = this.get(pos);
    if (posElement) {
      if (posElement.previous && posElement.next) {
        posElement.previous.next = posElement.next;
        posElement.next.previous = posElement.previous;
        this.size--;
        return;
      }
    }
  }
}

