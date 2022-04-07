// Read all the comments from page

const comments = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);

let currentNode = null;

while(currentNode = comments.nextNode()) {
    console.log(currentNode.textContent);
}