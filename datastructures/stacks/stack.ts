class StackNode{
    element:any
    next:StackNode|null


    constructor(element:any){
        this.element = element;
        this.next = null;
    }

}


class Stack {
    head:StackNode|null
    constructor(){
        this.head = null
    }

    push(element:any){
        const newNode = new StackNode(element);
        if(this.head === null){
            this.head = newNode;
        }else{
            const currentHead = this.head;
            this.head = newNode;
            this.head.next = currentHead;
        }
       return newNode;
    }

    pop(){
        if(this.head !== null){
            const currentHead = this.head;
            this.head = currentHead?.next;
            return currentHead;
        }else{
            return null;
        }
    }
} 


