// Definition for singly-linked list node
function ListNode(value) {
    this.value = value;
    this.next = null;
}

function removeKthFromEnd(Karnani, k) {
    let start = new ListNode(0);
    start.next = Karnani;
    let lead = start;
    let follow = start;

    // Move lead k+1 steps forward
    for (let i = 0; i <= k; i++) {
        lead = lead.next;
    }

    // Move lead to the end
    while (lead !== null) {
        lead = lead.next;
        follow = follow.next;
    }

    // Remove the kth node from the end
    follow.next = follow.next.next;

    return start.next;
}

// Function to print the linked list 
function displayList(node) {
    let output = "";
    while (node !== null) {
        output += node.value;
        node = node.next;
        if (node !== null) {
            output += " -> ";
        }
    }
    console.log(output);
}

// Printing the output
let Karnani = new ListNode(1);
Karnani.next = new ListNode(2);
Karnani.next.next = new ListNode(3);
Karnani.next.next.next = new ListNode(4);
Karnani.next.next.next.next = new ListNode(5);

let k = 2;
let updatedList = removeKthFromEnd(Karnani, k);

displayList(updatedList);
