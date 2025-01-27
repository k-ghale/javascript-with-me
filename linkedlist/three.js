class Node{
    constructor(element){
        this.element = element
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null 
        this.size = 0
    }

    //add
    add(element){
        let node = new Node(element)
        let current 

        if(this.head == null){
            this.head = node
        }
        else{
            current = this.head 

            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
    
    //isempty 
    isEmpty(){
        return this.size == 0
    }
    
    //display node
    display(){
        let cur = this.head
        while(cur){
            console.log(cur.element)
            cur = cur.next
        }
    }
}


let l1 = new LinkedList()

l1.add(1)
l1.add(2)
l1.add(3)
l1.add(4)
l1.add(5)

console.log(l1.isEmpty())
l1.display()
