console.log('Third File');

//get the parent
const thirdlist = document.getElementById('third-list');

// create the child

const li = document.createElement('li');
li.innerText = 'Brand new Item';

thirdlist.appendChild(li);
