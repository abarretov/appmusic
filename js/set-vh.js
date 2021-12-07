// prevents the "viewport bug"
var setVh = () => {
  // get the viewport height and multiple it by 1% to get a value for a vh unit
  let viewportHeight = window.innerHeight
  let vh = viewportHeight * 0.01
  // set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}
