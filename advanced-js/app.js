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
