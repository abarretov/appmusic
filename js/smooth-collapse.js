var createSwitchesCollapse = () => {
  // get all the triggers
  let triggers = document.querySelectorAll('[data-trigger="collapse"]')
  // creates the event listener of each trigger
  for (let i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener('click', () => {
      checkState(triggers[i])
    })
  }
}

// check state
function checkState(trigger) {
  // change the text of the button
  changeTextBtnSubmit()
  // selecting collapsible elements within the parent element
  let elements_collapsible = FORM_LOGIN.querySelectorAll('[data-state]')
  elements_collapsible.forEach(element => {
    let state = element.getAttribute('data-state')
    if (state === 'collapsed') {
      expandElement(element)
    } else {
      collapseElement(element)
    }
  })
}

// collapse elements
function collapseElement(element) {
  element.animate(
    [
      { height: `${element.scrollHeight}px` },
      { height: 0 }
    ], {
      duration: 400,
      easing: 'ease'
    }
  )
  // mark the element as "currently collapsed"
  element.setAttribute('data-state', 'collapsed')
}

// expand elements
function expandElement(element) {
  element.animate(
    [
      { height: 0 },
      { height: `${element.scrollHeight}px` }
    ], {
      duration: 400,
      easing: 'ease'
    }
  )
  // mark the element as "currently expanded"
  element.setAttribute('data-state', 'expanded')
}

// change text of button
function changeTextBtnSubmit() {
  REQUEST_STATUS.classList.remove('show')
  if (BTN_SUBMIT.innerText === 'Iniciar sesión') {
    BTN_SUBMIT.innerText = 'Crear usuario'
    // set required attribute
    INPUT_EMAIL.setAttribute('required', '')
  } else {
    BTN_SUBMIT.innerText = 'Iniciar sesión'
    // remove required attribute
    INPUT_EMAIL.removeAttribute('required')
  }
}
