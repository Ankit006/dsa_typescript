type elementType = string | number;

class NodeData {
  current: elementType;
  next: NodeData | null;
  constructor(current: elementType) {
    this.current = current;
    this.next = null;
  }
}

class SingleLinkedList {
  head: NodeData;
  tail: NodeData;
  size: number;
  constructor() {
    const newNode = new NodeData("data");
    this.head = newNode;
    this.tail = newNode;
    this.size = 0;
  }

  push(element: elementType) {
    const newNodeData = new NodeData(element);
    if (this.size === 0) {
      this.head = newNodeData;
      this.tail = newNodeData;
    } else {
      this.tail.next = newNodeData;
      this.tail = newNodeData;
    }
    this.size++;
  }

  pop() {
    if (this.size === 0) return;

    if (this.size === 1) {
      this.head = new NodeData("no Data");
    } else {
      let currentData: NodeData = this.head;
      let listSize = 0;
      while (listSize < this.size - 2 && currentData.next !== null) {
        currentData = currentData.next;
        listSize++;
      }
      currentData.next = null;
      this.tail = currentData;
    }
    this.size--;
  }
  shift() {
    if (this.size === 0) return;
    if (this.size === 1) {
      this.head = new NodeData("no Data");
      this.size--;
      return;
    }
    if (this.head.next) {
      const newCurrent = this.head.next;
      this.head = newCurrent;
      this.size--;
      return;
    }
  }
  unshift(element: elementType) {
    const newNode = new NodeData(element);
    if (this.size === 0) {
      this.head = newNode;
    } else {
      const tmp = this.head;
      this.head = newNode;
      this.head.next = tmp;
    }
    this.size++;
  }

  get(index: number): elementType {
    if (index > this.size - 1 || index < 0) return -1;
    if (index === 0) {
      return this.head.current;
    } else if (index === this.size - 1) {
      return this.tail.current;
    } else {
      let current: NodeData = this.head;
      while (index !== 0 && current.next !== null) {
        current = current.next;
        index--;
      }
      return current.current;
    }
  }

  set(element: elementType, index: number) {
    if (index > this.size - 1 || index < 0) return -1;
    let current: NodeData = this.head;
    let counter = 0;
    while (counter !== index && current.next !== null) {
      current = current.next;
      counter++;
    }
    current.current = element;
  }

  insert(element: elementType, index: number) {
     if (index > this.size - 1 || index < 0) return -1;
    const newNode: NodeData = new NodeData(element);
    if (index === 0) {
      const tempHead: NodeData = this.head;
      this.head = newNode;
      this.head.next = tempHead;
    } else {
      let counter: number = 0;
      let current: NodeData = this.head;
      while (counter !== index - 1 && current.next !== null) {
        current = current.next;
        counter++;
      }

      let tmp = current.next;
      current.next = newNode;
      current.next.next = tmp;
    }
    this.size++;
  }

  remove(pos: number) {
    if (pos > this.size - 1 && pos < 0) return;
    if (this.size === 0) return;
    if(pos === 0) return this.shift();
    if(pos === this.size - 1) return this.pop();
      let current = this.head;
      let counter = 0;
      while (counter !== pos - 1 && current.next) {
        current = current.next;
      }
      if (current.next) {
        const newNextNode = current.next.next;
        current.next = newNextNode;
        this.size--;
      }
  }
  reverse(){
    if(this.size < 1) return;

    let current:NodeData = this.head;
    let previousNode:NodeData | null = null;
    let count = 0;
    while(count <= this.size - 1){
      if(count !== this.size -1 && current.next){
        if(count === 0){
          this.tail = current;
        }
        const nextTmp = current.next;
        current.next = previousNode;
        previousNode = current;
        current = nextTmp;
      }else{
        current.next = previousNode;
        this.head = current;
      }
      count ++;
    }
  }
}
