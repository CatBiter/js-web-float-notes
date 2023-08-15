import './assets/css/style.css'

function initialization (id) {
  let oldElement = document.getElementById(id);
  let newElement = document.createElement('div')
  newElement.classList.add('floatIcon')
  // let icon = document.createElement('img')
  // icon.classList.add('noteIcon')
  // icon.src = './assets/icon/笔记.svg'
  // newElement.appendChild(icon)

  // 拖动
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  newElement.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - newElement.getBoundingClientRect().left;
    offsetY = e.clientY - newElement.getBoundingClientRect().top;
    newElement.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    newElement.style.left = `${e.clientX - offsetX}px`;
    newElement.style.top = `${e.clientY - offsetY}px`;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    newElement.style.cursor = 'grab';
  });

  oldElement.parentNode.replaceChild(newElement, oldElement)
}

export default initialization;