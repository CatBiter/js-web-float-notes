import './assets/css/style.css'

function initNoteCard (node) {
  node.innerHTML = `
    <div class="noteTop">
      <div></div>
      <div class="closeIcon"></div>
    </div>
  `
}

export default initNoteCard;