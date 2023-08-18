import './assets/css/style.css'
const anime = require('animejs')

export function openNotes () {
  console.log("开启")
  let floatBox = document.getElementById('floatBox')
  let icon = document.getElementById('floatIcon')

  // 销毁原本
  floatBox.classList.remove('floatIcon')
  floatBox.removeChild(icon)
}

export function closeNotes () {
  console.log("关闭")
}