import './style.css';

import Todolist, { addListItem, list } from './modules/script.js';

const enterKey = document.getElementById('enter-key');
const clearButton = document.querySelector('.clr-btn');

document.addEventListener('DOMContentLoaded', () => {
  Todolist.createList();
});

addListItem.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    Todolist.addToList();
    Todolist.createList();
    addListItem.value = '';
  }
});

enterKey.addEventListener('click', () => {
  Todolist.addToList();
  Todolist.createList();
  document.querySelector('.input-text').value = '';
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('to-do')) {
    event.target.parentElement.classList.add('back');
  }
});

clearButton.addEventListener('click', () => {
  const filteredList = list.filter((obj) => obj.complete !== true);
  localStorage.setItem('listStorage', JSON.stringify(filteredList));
  Todolist.createList();
  window.location.reload();
});
