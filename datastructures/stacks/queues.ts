type queueType = string|number|boolean|object;

class QueueNode{
     element:queueType
     next:QueueNode|null
     constructor(element:queueType){
         this.element = element,
         this.next = null
     }
}


class Queue{
    head:QueueNode
    tail:QueueNode
    size:number

    constructor(){
        const tmpNode = new QueueNode(false);
        this.head = tmpNode
        this.tail = tmpNode 
        this.size = 0
    }

    enqueue(element:queueType){
        const newNode =  new QueueNode(element);
        if(this.size === 0){
            this.tail = newNode;
            this.head = newNode;
        }else{
             this.tail.next = newNode;
             this.tail = newNode;
        }
        this.size++
    }

    dequeue(){
       if(this.size ===0) return;
       if(this.size === 1){
           const tmpNode = new QueueNode(false);
           const currentTailNode = this.tail;
           this.tail = tmpNode;
           this.head = tmpNode;
           this.size--;
           return currentTailNode;
       }else{
           if(this.head.next){
              const nodeData = this.head;
              this.head = this.head.next;
              this.size --;
              return nodeData;
          }
       }
    }
    

}


