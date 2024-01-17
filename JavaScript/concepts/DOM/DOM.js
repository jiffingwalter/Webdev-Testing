// document object model (DOM) - the object of the entire html page itself, containing all html elements and their metadata

const elementByID = document.getElementById("this selects any single element by its html ID");
const elementsByClass = document.getElementsByClassName("this gets an html collection of all elements with a class name");
const elementsByTag = document.getElementsByTagName("this gets an html collection of all elements with an html element tag");
const elementByQuery = document.querySelector("this gets the first element on the DOM that matches based on a selector, CSS style");
const elementsByQuery = document.querySelectorAll("this gets a nodelist of all html elements that match the selector");

// note that html collections do not have advanced methods like forEach. if they're needed, must convert the collection to an array first
// note that nodelists are static and do not live update when selected and modified, but DO have forEach and other useful methods


// DOM navigation - process of navigating through the structure of the HTML document with javascript
// first element child - gets first child of the selected element
let element = document.getElementById("list-names");
const firstChild = element.firstElementChild; // returns first name in the list (oneyplays)
firstChild.style.color = "blue";

// last element child - same as previous be selects last child instead
const lastChild = element.lastElementChild;
lastChild.style.color = "red";

// next element sibling - gets next sibling element of selected element
const elementLi = document.getElementById("li-oney");
const nextSibling = elementLi.nextElementSibling;
nextSibling.style.color = "green";

// previous element sibling
const elementLastLi = document.getElementById('li-critikal');
const prevSibling = elementLastLi.previousElementSibling;
prevSibling.style.backgroundColor =  "lime";

// parent element - selects the entire parent element of the element selected
const parent = element.parentElement;
parent.style.backgroundColor = "whitesmoke";

// children - opposite of parent element, selects all children of a parent element. returns node list
const children = document.getElementById("list-reasoning");
children.style.backgroundColor = "antiquewhite";
children['children'][0].style.color = "white"; // can also select children by index

// creating and appending elements to the DOM -------------------------------------------------------------------
const newParagraph = document.createElement("p"); // create the new element and choose its tag
newParagraph.textContent = "This is a paragraph"; // add text content
newParagraph.style.color = "tomato"; // style as desired
newParagraph.style.textAlign = "center";
document.body.append(newParagraph); // append or prepend to document... 

// ... or append and prepend to other html elements
const boxes = document.querySelectorAll('[id*="box"]'); // gets nodelist of all elements with an id beginning with box
document.body.insertBefore(newParagraph,boxes[1]);
console.log(boxes);

// now delete the element
document.body.removeChild(newParagraph);

// example: simply adding list element to existing lists
const newListItem = document.createElement('li');
newListItem.textContent = "BroCode";
document.getElementById("list-names").append(newListItem);