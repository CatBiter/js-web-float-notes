import './assets/css/style.css'
import { openNotes } from './changeUI'

import Cookies from 'js-cookie'
import moment from 'moment'

function initialization () {
  // 初始化
  const appContainer = document.getElementById('notes')
  appContainer.innerHTML = `
    <div id="floatBox" class="floatIcon floatPosition floatShadow floatIconActive">
      <img id="floatIcon" src="${'/src/assets/icon/note.svg'}" class="noteIcon"></img>
      <div id="floatNotesTop" class="floatNotesTop">
        <img id="closeIcon" src="${'/src/assets/icon/close.png'}" class="closeIcon"></img>
      </div>
      <div id="floatNotesContent" class="floatNotesContent">
        <div class="notesItem">添加新笔记</div>
      </div>
    </div>
  `

  // 临时设置测试
  let notes = [
    { id: '123546825', createDate: moment().format('YYYY-MM-DD hh:mm-ss'), message: '笔记1' },
    { id: '123546865', createDate: moment().format('YYYY-MM-DD hh:mm-ss'), message: '笔记2' },
    { id: '123546825', createDate: moment().format('YYYY-MM-DD hh:mm-ss'), message: '笔记3' },
  ]
  console.log(notes)
  Cookies.set('notes', JSON.stringify(notes))

  // 获取参数
  let floatBox = document.getElementById('floatBox')

  // 设置参数
  let isDragging = false;   // 是否正在拖动
  let offsetX = 0;          // 鼠标点击当前元素距左上角的宽
  let offsetY = 0;          // 鼠标点击当前元素距左上角的高
  // 判断是点击还是拖动
  let beforeX = 0;
  let beforeY = 0;
  let afterX = 0;
  let afterY = 0;
  // 判断是否为图标
  let isIcon = true;

  // 设置事件
  floatBox.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - floatBox.getBoundingClientRect().left;    // 鼠标在全局的横坐标 - 当前点击元素距离左屏幕的横坐标 = 当前元素距左上角的坐标
    offsetY = e.clientY - floatBox.getBoundingClientRect().top;
    beforeX = e.clientX;
    beforeY = e.clientY;
    afterX = e.clientX;
    afterY = e.clientY;
  })

  document.addEventListener('mousemove', (e) => {     // 设置document来监听移动而不是floatBox是因为拖动鼠标移动太快，拖拽动作可能会失效
    if (!isDragging) return;
    floatBox.style.left = `${e.clientX - offsetX}px`;       // floatBox的坐标 = 鼠标的当前坐标 - 鼠标点击时当前元素距左上角的宽
    floatBox.style.top = `${e.clientY - offsetY}px`;
    afterX = e.clientX;
    afterY = e.clientY;
  })

  document.addEventListener('mouseup', (e) => {
    if (isClick(beforeX, beforeY, afterX, afterY) && isIcon && isDragging) {
      openNotes()
      isIcon = false;
    }
    isDragging = false;
  })
}

function isClick (beforeX, beforeY, afterX, afterY) {
  let moveX = Math.abs(afterX - beforeX)
  let moveY = Math.abs(afterY - beforeY)
  if (moveX == 0 && moveY == 0) {
    return true;
  } else {
    return false;
  }
}

export default initialization;


