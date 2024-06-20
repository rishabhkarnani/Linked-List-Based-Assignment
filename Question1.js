// Definition for single-linked list node
function Node(value) {
    this.value = value;
    this.next = null;
}

function mergeLists(Rishabh, Karnani) {
    let dummy = new Node(0);
    let current = dummy;

    while (Rishabh !== null && Karnani !== null) {
        if (Rishabh.value < Karnani.value) {
            current.next = Rishabh;
            Rishabh = Rishabh.next;
        } else {
            current.next = Karnani;
            Karnani = Karnani.next;
        }
        current = current.next;
    }

    if (Rishabh !== null) {
        current.next = Rishabh;
    } else {
        current.next = Karnani;
    }

    return dummy.next;
}

// Function to print the linked list 
function printList(node) {
    let result = "";
    while (node !== null) {
        result += node.value;
        node = node.next;
        if (node !== null) {
            result += " -> ";
        }
    }
    console.log(result);
}

// Printing the output
let Rishabh = new Node(1);
Rishabh.next = new Node(3);
Rishabh.next.next = new Node(5);

let Karnani = new Node(2);
Karnani.next = new Node(4);
Karnani.next.next = new Node(6);

let mergedList = mergeLists(Rishabh, Karnani);

printList(mergedList);
