// creates the submit event listener
var listenerSubmitEvent = () => {
  FORM_LOGIN.addEventListener('submit', (e) => {
    e.preventDefault()
    if (BTN_SUBMIT.innerText === 'Crear usuario') {
      createUser(e.currentTarget)
    } else {
      loginUser(e.currentTarget)
    }
  })
}

window.addEventListener('load', () => {
  setVh()
  listenerSubmitEvent()
  createSwitchesCollapse()
  // menuBtn()
})