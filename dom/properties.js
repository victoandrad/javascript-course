// ---------- 1. NAVIGATION

// methods for navigating between elements and nodes in the DOM.
ParentNode           // returns the parent node, regardless of type
parentElement        // returns the parent node of type element
nextSibling          // returns the next sibling node
previousSibling      // returns the previous sibling node
childNodes           // returns a NodeList of all child nodes
children             // returns an HTMLCollection of all child elements
firstChild           // returns the first child node
lastChild            // returns the last child node
firstElementChild    // returns the first child node of type element
lastElementChild     // returns the last child node of type element
hasChildNodes()      // returns true if there are child nodes

// ---------- 2. ADDING NODES

// methods for adding nodes to the DOM.

// 2.1 Insert at the Beginning
ParentNode.prepend()     // adds a node at the beginning of the parent element

// 2.2 Insert at the End
ParentNode.append()      // adds a node at the end of the parent element
Node.appendChild()       // adds a node at the end of the parent element

// 2.3 Insert Relative to a Node
Node.insertBefore(element, referenceElement) // adds a node before another node
Node.after()         // adds a node after the element
Node.before()        // adds a node before the element

// insertions at Specific Positions
Element.insertAdjacentElement(position, element)
// possible positions:
// - beforebegin: before the element
// - afterbegin: inside, before the first child
// - beforeend: inside, after the last child
// - afterend: after the element

Element.insertAdjacentHTML(position, html)   // inserts HTML at the specified position
Element.insertAdjacentText(position, text)   // inserts text at the specified position

// ---------- 3. REMOVING NODES

// methods for removing nodes from the DOM.
Node.replaceChild(newChild, oldChild)   // replaces one node with another
Node.removeChild(child)                // removes a specific node
childNode.remove()                     // removes the element directly

// ---------- 4. CREATING NODES

// methods for creating new nodes.
document.createElement(tagName)        // creates an element
document.createAttribute(name)         // creates an attribute
document.createTextNode(text)          // creates a text node
document.write(html)                   // writes HTML directly into the document
