const createName = document.querySelector('.create-name');
const createSeria = document.querySelector('.create-seria');
const createReps = document.querySelector('.create-reps');
const addBtn = document.querySelector('.add');
const error = document.querySelector('.error');
const ulList = document.querySelector('ul');
const ulText = document.querySelector('.ul-list');
const editBtn = document.querySelector('.edit');
const completeBtn = document.querySelector('.complete');
const deleteBtn = document.querySelector('.delete');

const popup = document.querySelector('.popup');
const popupInput = document.querySelector('.popup-input');
const popupSaveBtn = document.querySelector('.popup-save');
const popupDeleteBtn = document.querySelector('.popup-delete');

let index


addBtn.addEventListener('click', createExercise)
