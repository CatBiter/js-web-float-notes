import './assets/css/style.css'
import initialization from './initialization'

const appContainer = document.getElementById('notes')
appContainer.innerHTML = `
  <div id="floatIcon" class="floatIcon floatPosition floatShadow">
    <img id="icon" src="${'/src/assets/icon/note.svg'}" class="noteIcon"></img>
  </div>
`

initialization(appContainer)
