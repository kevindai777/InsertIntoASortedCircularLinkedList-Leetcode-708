//Objective is to insert a node into a sorted circular linked list

class Node {
    constructor(val, next = null) { //if next is not given, assume it is empty
      this.val = val
      this.next = next
    }
}

class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(3)
head.next = new Node(4)
head.next.next = new Node(1)
head.next.next.next = head

let insertVal = 2


//O(n) solution that traverses the list using two pointers to check
//the previous and current node

if (!head) {
    let newNode = new Node(insertVal)
    newNode.next = newNode
    return newNode
}

let prev = head 
let curr = head.next 

//While we haven't reached the end of the cycle
while (curr != head) {
    //If we're at the end of the cycle (since it's sorted)
    if (prev.val > curr.val) {
        if (prev.val <= insertVal || curr.val >= insertVal) {
            break
        }
    }
    
    if (prev.val <= insertVal && curr.val >= insertVal) {
        break
    }
    
    prev = curr
    curr = curr.next
}

prev.next = new Node(insertVal, curr)
return head