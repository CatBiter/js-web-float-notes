import './assets/css/style.css'
import initNoteCard from './initNoteCard';

function initialization (appContainer) {
  let newElement = document.getElementById('floatIcon')
  let icon = document.getElementById('icon')

  // 拖动
  let isDragging = false;   // 是否正在拖动
  let offsetX = 0;          // 整个的X轴值
  let offsetY = 0;          // 整个的Y轴值

  // 判断是点击还是拖动
  let beforeX = 0;
  let beforeY = 0;
  let afterX = 0;
  let afterY = 0;

  // 是否是图标
  let isIcon = true;


  // 当浮动图标被按下的时候
  newElement.addEventListener('mousedown', (e) => {
    console.log('点击')
    isDragging = true;    // 设置现在为拖动状态
    offsetX = e.clientX - newElement.getBoundingClientRect().left;    // 记录现在的X值
    offsetY = e.clientY - newElement.getBoundingClientRect().top;     // 记录现在的Y值
    beforeX = e.clientX;
    beforeY = e.clientY;
    afterX = e.clientX;
    afterY = e.clientY;
    newElement.style.cursor = 'grabbing';
    newElement.classList.remove('changeAnimation')
  });

  // 当鼠标移动的时候（此时是document，是全局鼠标移动）
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;    // 若没有在移动状态，则直接返回不动
    newElement.style.left = `${e.clientX - offsetX}px`;
    newElement.style.top = `${e.clientY - offsetY}px`;
    afterX = e.clientX;
    afterY = e.clientY;
  });

  // 当鼠标抬起的时候
  document.addEventListener('mouseup', () => {
    if (isIcon && isDragging) {
      let moveX = Math.abs(afterX - beforeX)
      let moveY = Math.abs(afterY - beforeY)
      if (moveX == 0 && moveY == 0) {   // 当点击的时候
        console.log('click')
        newElement.classList.remove('floatIcon')
        newElement.classList.add('changeAnimation')
        newElement.classList.add('floatNotes')
        newElement.removeChild(icon)
        initNoteCard(newElement)
        isIcon = false
      }
    }
    isDragging = false;
    newElement.style.cursor = 'pointer';
  });

}

export default initialization;


