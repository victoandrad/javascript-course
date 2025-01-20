// ---------- 1. BROWSER EVENTS

// Common events related to the browser, interactions, and behaviors.

// ---------- 2. USER INTERFACE EVENTS

// Events triggered by user interaction with the interface.
click                // triggered when an element is clicked
dblclick             // triggered when an element is double-clicked
mousedown            // triggered when a mouse button is pressed
mouseup              // triggered when a mouse button is released
mousemove            // triggered while the mouse moves
mouseenter           // triggered when the mouse enters an element
mouseleave           // triggered when the mouse leaves an element
wheel                // triggered when the mouse wheel is scrolled
contextmenu          // triggered when the context menu (right-click) is opened

// ---------- 3. KEYBOARD EVENTS

// Events related to keyboard interaction.
keydown              // triggered when a key is pressed
keyup                // triggered when a key is released
keypress             // (deprecated) triggered when a key is pressed (not recommended)

// ---------- 4. FORM EVENTS

// Events associated with form elements.
submit               // triggered when a form is submitted
change               // triggered when the value of an input field changes
input                // triggered when the value of an input field changes (in real-time)
focus                // triggered when an element gains focus
blur                 // triggered when an element loses focus
reset                // triggered when a form is reset

// ---------- 5. RESOURCE EVENTS

// Events related to resource loading.
load                 // triggered when a resource or document has fully loaded
beforeunload         // triggered before the user leaves the page
unload               // triggered when leaving the page (not recommended for modern use)
error                // triggered when an error occurs while loading a resource

// ---------- 6. NETWORK EVENTS

// Events related to network connections.
online               // triggered when the network connection is restored
offline              // triggered when the network connection is lost

// ---------- 7. DOCUMENT EVENTS

// Events triggered by the document state.
DOMContentLoaded     // triggered when HTML is loaded and parsed (before CSS/JS)
visibilitychange     // triggered when the page visibility changes (visible/hidden)

// ---------- 8. DRAG & DROP EVENTS

// Events related to drag-and-drop interactions.
dragstart            // triggered when dragging starts on an element
drag                 // triggered while dragging an element
dragenter            // triggered when dragging enters a valid drop target
dragover             // triggered when dragging over a drop target
dragleave            // triggered when dragging leaves a drop target
drop                 // triggered when an element is dropped on a target
dragend              // triggered when dragging ends
