// document.body.children[1].children[0].href = "https://google.com";

// console.dir(document);
// alert();
// window.alert();

// document.body.children[0];
// console.dir(document.body.children[0]);
// console.log(document.body.children[0]);
// what is interesting, there is no difference between dir
// and log output when code in js script

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://duckduckgo.com";

// anchorElement = document.querySelector("#external-link");
anchorElement = document.querySelector("a");
anchorElement.href = "https://academind.com/";

// ADD AN ELEMENT
// 1. Create new element
let newAnchorElement = document.createElement("a");
newAnchorElement.textContent = " and this lead to Google.";
newAnchorElement.href = "https://www.google.com/";

// 2. Get access to the parent element taht should hold the new element
let firstParagraph = document.querySelector("p");

// 3. Insert the new element into the parent of the parent element content

firstParagraph.append(newAnchorElement);

// REMOVE ELEMENTS
// 1. Select the element that should be removed
let firstHeader = document.querySelector("h1");
// 2. Remove it!
firstHeader.remove();
// firstHeader.parentElement.removeChild(firstHeader); // for older browsers

// MOVE ELEMENTS
firstParagraph.parentElement.append(firstParagraph);

// innerHTML
console.log(firstParagraph.innerHTML);
firstParagraph.innerHTML = "Hi! This is <strong>important!</strong>";
// .innerText, .textContent
