class Node {
    constructor(data){
        this.data = data
        this.next = null
        this.previous = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null // prmeiro elemtno da lista
        this.tail = null // ultimo elemento da lista
        this.size = 0
    }

    add(data){
        let newNode = new Node(data)

        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        }
        this.size++
    }

    insertAt(data, index){
        if(index < 0 || index > this.size){
            return console.log('Index fora dos limites.')
        }

        let newNode = new Node(data)// é um elemtno que eu vou adicionar
        let current = this.head // é um elemento que ja está na lista

        if(index === 0){
            if(this.head === null){
                this.head = newNode
                this.tail = newNode
            } else {
                newNode.next = this.head
                this.head.previous = newNode
                this.head = newNode
            }
        } else if(index === this.size){
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        } else {
            for(let i = 0; i < index; i++){
                current = current.next
            }

            newNode.next = current
            newNode.previous = current.previous

            current.previous.next = newNode
            current.previous = newNode
        }

        this.size++
    }

    removeAt(index){
        if(index < 0 || index >= this.size){
            return console.log('Index fora dos limites.')
        }

        let current = this.head 

        if(index === 0){
            this.head = this.head.next

            if(this.head !== null){
                this.head.previous = null
            } else {
                this.tail = null
            }
        } else if(index === this.size - 1){
            this.tail = this.tail.previous
            this.tail.next = null
        } else {
            for(let i = 0; i < index; i++){
                current = current.next
            }

            current.previous.next = current.next
            current.next.previous = current.next
        }

        this.size--
    }

    getData(index){
        if(index < 0 || index >= this.size){
            return console.log('Index fora dos limites')
        }

        let current = this.head

        for(let i = 0; i < index; i++){
            current = current.next
        }

        return current.data
    }

    print(){
        let current = this.head
        let result = []


        if(!current){
            return 'A lista está vazia.'
        } else {
            while(current !== null){
                result.push(current.data)
                current = current.next
            }
        }
        console.log(result.join(' <=> '))
    }

    getSize(){
        return this.size
    }

    isEmpty(){
        return this.size === 0
    }

    invertList() {
        let current = this.head
        let temp = null
    
        for (let i = 0; i < this.size; i++) {
            temp = current.previous
            current.previous = current.next
            current.next = temp
    
            current = current.previous
        }
    
        if (temp !== null) {
            this.tail = this.head
            this.head = temp.previous
        }
    }
    

    deleteList(){

        this.head = 0
        this.tail = 0
        this.size = 0

        return console.log('Lista limpa!')
    }
}

let lista = new DoublyLinkedList()

lista.add(10)
lista.add(20)
lista.add(30)
lista.add(40)
lista.add(50)
lista.print()

lista.insertAt(5, 0)
lista.insertAt(15, 3)
lista.insertAt(55, lista.getSize())
lista.print()

lista.removeAt(0)
lista.removeAt(3)
lista.removeAt(lista.getSize() - 1)
lista.print()

console.log('Elemento na posição 2: ', lista.getData(2))
console.log('A lista está vazia?', lista.isEmpty())
console.log('Tamanho da lista?', lista.getSize())

lista.deleteList()
lista.print()
console.log('Tamanho da lista?', lista.getSize())
console.log('A lista está vazia?', lista.isEmpty())

// criar um método para inverter a lista

console.log(lista.invertList())