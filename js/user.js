// checks if exist any saved userId value
var checkIdUser = () => {
  if (sessionStorage.getItem("userId")) {
    getUser(sessionStorage.getItem('userId'))
  }
}

window.addEventListener('load', () => {
  setVh()
  checkIdUser()
  // menuBtn()
})