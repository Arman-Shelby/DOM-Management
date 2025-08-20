// document.getElementById('players-container').childNodes[3].childNodes[1].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;

//Create inner text and set innertext or innehtml

const newChild  = document.createElement('li');
newChild.innerText = 'New Born footballer here';

//find the parent where you will add the child'
const playersList = document.getElementById('player-list');

//Append the child to the parent

playersList.appendChild(newChild)