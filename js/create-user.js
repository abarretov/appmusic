// create user
var createUser = async (form) => {
  try {
    const FORM_DATA = new FormData()
    FORM_DATA.append('url', 'contenido')
    FORM_DATA.append('params', 'registrar')
    FORM_DATA.append('data', JSON.stringify({
      user: form.user.value,
      password: form.password.value,
      email: form.email.value,
      name: '',
      bio: ''
    }))
    const REQUEST = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: {
        'KEY_MUSIC': 'Z9AQBQXUWDHRN5GYE3DUG52BTSFT1NMA'
      },
      body: FORM_DATA
    })
    const RESULT = await REQUEST.json()
    const RESPONSE = RESULT.response.respuesta
    if (RESPONSE !== 'El usuario ya se encuentra registrado') {
      setTimeout(() => {
        // show success message
        REQUEST_STATUS.innerText = '¡Usuario registrado!'
        REQUEST_STATUS.classList.add('show', 'form__text--success')
        // show the user data
        sessionStorage.setItem('userId', RESPONSE)
        window.location.href = './user/'
      }, 3000)
    } else {
      // show error message
      REQUEST_STATUS.innerText = RESPONSE
      REQUEST_STATUS.classList.remove('form__text--success')
      REQUEST_STATUS.classList.add('show', 'form__text--error')
    }
  } catch(err) {
    console.error(`Hubo un problema con la petición Fetch: Error ${err.status}: ${err.statusText}`)
  }
}
