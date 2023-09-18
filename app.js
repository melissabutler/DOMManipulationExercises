document.getElementById('container');

document.querySelector('#container');

document.querySelectorAll('.second');

document.querySelector('ol .third')

const greeting = document.querySelector('#container'); 
greeting.innerText = "Hello!";
//OR
const greeting2 = document.getElementById('container');
greeting2.innerText = "Hello!";

const div = document.querySelector('div.footer');
div.classList.add('main');
div.classList.remove('main');

const newLi = document.createElement('li');
const ol = document.querySelector('ol')
newLi.innerText = "four";
ol.append(newLi);

const listItems = document.querySelectorAll('ol');

for(li of listItems){
    li.style.backgroundColor = "green";
};

const removeFooter = document.querySelector('.footer');
removeFooter.remove();
