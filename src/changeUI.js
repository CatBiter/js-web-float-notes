import './assets/css/style.css'
import anime from 'animejs'

export function openNotes () {
  console.log("开启")
  let floatBox = document.getElementById('floatBox')
  let icon = document.getElementById('floatIcon')
  let floatNotesTop = document.getElementById('floatNotesTop');
  let floatNotesContent = document.getElementById('floatNotesContent');
  let closeIcon = document.getElementById('closeIcon');

  floatBox.classList.remove('floatIconActive')

  // 创建动画序列
  const timeline = anime.timeline({
    easing: 'easeInOutQuad',
    duration: 1000,
  })

  timeline.add({
    targets: floatBox,
    width: '270px',
    backgroundColor: '#a7e2ff',
    borderRadius: '8px',
    begin: () => {
      floatBox.removeChild(icon)
    }
  }).add({
    targets: floatNotesTop,
    width: '240px',
    height: '24px',
    begin: () => {
      floatNotesTop.style.display = 'block'
      closeIcon.style.display = 'block'
    }
  }, "-=600")
}

export function closeNotes () {
  console.log("关闭")
}