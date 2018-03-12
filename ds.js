class Node{
  constructor(data=null){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = this.head;
  };

  push(...items){

    if(!this.head){
      this.head = new Node(items[0]);
      this.tail = this.head;
      if(items.length > 1){
        items.splice(0,1);
      } 
    }
    items.forEach((item) =>{
      this.tail.next = new Node(item);
      this.tail = this.tail.next;
    });
    return this;
  }
    
  deleteByValue(val){
    let tmp = this.head;
    let prev;
    // if its the head
    if (tmp.data === val){
      this.head = tmp.next;
      return true;
    }
    while(tmp.next){
      prev = tmp;
      if(tmp.next.data == val){
        tmp.next = tmp.next.next;
        return true;
      }
      
      tmp = tmp.next;
    }
    //if its the tail
    if(tmp.data === val){
      prev.next = tmp.next;
      return true;
    }
    return false;
  }

  print(){
    let tmp = this.head;
    let str = "";
    while(tmp){
      str += "( "+String(tmp.data) + " )->" ;
      tmp = tmp.next;
    }
    str += "End of list"
    console.log(str);
    return str;
  }

  reverse(){
    this.tail = this.head;
    let current = this.head;
    let prev = null;
    let next;
    while(current){
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head =prev;
  }

  shift(){
    // shift method to be used in the Queue class
    let tmp =null;
    if (this.head){
      tmp = this.head
      this.head = this.head.next;
      return tmp.data;
    }
    return tmp;
  }

  isEmpty(){
    return this.head;
  }
}

class Queue {
  constructor(){
    this.queue = new LinkedList();
    this.length = 0;
  }

  enqueue(...items){
    this.queue.push(...items);
    this.length += items.length ;
  }

  dequeue(){
    if(this.queue.isEmpty()){
      this.length -- ;
      return this.queue.shift();
    } else {
      throw "The queue is empty!"
    }
  }

  peek(){
    // reg ex to eliminiate the braces
    return this.queue.print().split("-")[0].replace(/\(|\)/g,"");
  }

  _length(){
    return this.length;
  }
}

let ll = new LinkedList();
ll.push(5,7,8,9).push(-7,1);
console.log( ll.deleteByValue(6));
ll.print();
ll.reverse();
ll.print();
let que = new Queue();
que.enqueue(1,2,3,4,3,4,5);
console.log(que._length());
while(que._length()){
  console.log(que.dequeue());
}
