// login user
var loginUser = async (form) => {
  try {
    const FORM_DATA = new FormData()
    FORM_DATA.append('url', 'contenido')
    FORM_DATA.append('params', 'autenticar')
    FORM_DATA.append('data', JSON.stringify({
      user: form.user.value,
      password: form.password.value
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
    if (RESPONSE !== 'Usuario no registrado' && RESPONSE !== 'Contraseña incorrecta') {
      // show the user data
      sessionStorage.setItem('userId', RESPONSE)
      window.location.href = './user/'
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
