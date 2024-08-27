// lista encadeada/lista simples

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    addElement(data) {
        let newNode = new Node(data)

        if(this.head === null){
            this.head = newNode
        } else {
            let current = this.head
            while(current.next !== null){
                current = current.next
            }

            current.next = newNode
        }

        this.size++
    }

    insertAt(data, index){
        if(index < 0 || index > this.size){
            return console.log('Index fora dos limites.')
        }

        let newNode = new Node(data)
        let current = this.head
        let previous = 0

        if(index == 0){
            newNode.next = this.head
            this.head = newNode
        } else {
            for(let i = 0; i < index; i++){
                previous = current
                current = current.next
            }

            newNode.next = current
            previous.next = newNode
        }

        this.size++
    }

    removeFrom(index){
        if(index < 0 || index > this.size){
            return console.log('Index fora dos limites')
        }

        let current = this.head
        let previous

        if(index === 0){
            this.head = current.next
        } else {
            for(let i = 0; i < index; i++){
                previous = current
                current = current.next
            }

            previous.next = current.next
        }

        this.size--

        return current.data
    }

    indexOf(data){
        let current = this.head
        let index = 0

        while(current !== null){
            if(current.data === data){
                return index
            }
            index++
            current = current.next
        }

        return -1

    }

    sizeList() {
        return this.size
    }

    printList() {
        let current = this.head
        while(current !== null){
            console.log(current.data)
            current = current.next
        }
    }
}

let list = new LinkedList()

list.addElement('Elemento 1')
list.addElement('Elemento 2')
list.addElement('Elemento 3')
list.addElement('Elemento 4')
list.addElement('Elemento 5')

list.removeFrom(3)
list.printList()

console.log(list.indexOf('Elemento 2'))