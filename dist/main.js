

const pageTitle = document.querySelector('#pageTitle');
pageTitle.textContent = "Plantain Power: Insane Dominican Cuisine";

const pageParagraph = document.querySelector('#pageParagraph');
pageParagraph.textContent = "Unlike bananas, you have to cook plantains after you peel them. But if that is acheived successfully, you will enter the crazy world of Dominican Food.";

const x = document.createElement("IMG");
x.setAttribute("src", "../resources/superplantain.png");
x.setAttribute("width", "304");
x.setAttribute("height", "228");
x.setAttribute("alt", "Plantain");
document.body.appendChild(x);