// console.log('append file connected');

//1. parent node
const mainContainer = document.getElementById("main-container");

// 2 . create child node
const placesSection = document.createElement("section");

//create h1
const h1 = document.createElement("h1");
h1.innerText = "Places I want to visit";
placesSection.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Bandorbon";
ul.appendChild(li1); 

const li2 = document.createElement('li');
li2.innerText = 'Sundarban';
ul.appendChild(li2);

placesSection.appendChild(ul);


//3. append placeSection to the mainContainer
mainContainer.appendChild(placesSection);



//easier to create html

const booksSection = document.createElement('section');

booksSection.innerHTML = `
<h1> Books i want to read </h1>
<ul>
    <li> Physics</li>
    <li> Chemistry </li>
    <li> Biology </li>
    <li> Math </li>
    <li> Microprocessor and Assembly Language Programming </li>
</ul>
`
mainContainer.appendChild(booksSection);