'use strict';

//selecting the classes and saving them in variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModel = function () {
  console.log('Button Clicked');
  //manipulating styles in javascript to make them visible
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModel = function () {
  //to make it hidden
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//I had to however first of all add the Event Listerner..
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModel);

//I also added event listeners for the Modal and the overlay...
btnCloseModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      //it means that the moda is visible and should be closed
      closeModel();
    }
  }
});
