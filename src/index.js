import './assets/css/style.css'

const draggableDiv = document.createElement('div');
draggableDiv.textContent = '拖动框1';
draggableDiv.classList.add('floatDiv')

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

draggableDiv.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - draggableDiv.getBoundingClientRect().left;
  offsetY = e.clientY - draggableDiv.getBoundingClientRect().top;
  draggableDiv.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  draggableDiv.style.left = `${e.clientX - offsetX}px`;
  draggableDiv.style.top = `${e.clientY - offsetY}px`;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  draggableDiv.style.cursor = 'grab';
});

document.body.appendChild(draggableDiv);
