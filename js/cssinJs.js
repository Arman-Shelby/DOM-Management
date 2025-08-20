// console.log('file connected');

// const sections = document.getElementsByTagName('section');
const sections = document.querySelectorAll('section')
// console.log(sections);

for (section of sections){
    section.style.backgroundColor = 'lightblue';
    section.style.border= '3px solid green';
    section.style.margin = '10px';
    section.style.borderRadius = '20px';
    section.style.padding = '20px';
    // console.log(section);

}

//dynamic class
// for(const section of sections){
//     section.classList.add('sectionCard');
// }

