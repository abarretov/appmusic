// get user
const PROFILE_NAME = document.getElementById('profileName')
const PROFILE_IMG = document.getElementById('profileImg')
const PROFILE_BIO = document.getElementById('profileBio')
const FAVORITE_LIST = document.getElementById('favList')
const PERSONAL_LIST = document.getElementById('myList')
const OTHER_LIST = document.getElementById('otherList')
const ALL_LIST = document.getElementById('allList')

// print profile
function printProfile(profile) {
  // PROFILE_IMG.setAttribute('src', `${profile.image}`)
  PROFILE_NAME.innerText = profile.name
  // PROFILE_BIO.innerText = profile.bio
}

// print favorite list
function printFavList(songs) {
  let fragment = createSongs(songs)
  FAVORITE_LIST.append(fragment)
}

// print personal list
function printOwnList(list) {
  let fragment = createOwn(list)
  PERSONAL_LIST.append(fragment)
}

// print other lists
function printOtherList(list) {
  let fragment = createList(list)
  OTHER_LIST.append(fragment)
}

// print all songs/list
function printAll(songs, list) {
  let fragmentList = createList(list)
  let fragmentSongs = createSongs(songs)
  ALL_LIST.append(fragmentList, fragmentSongs)
}

// create node object (songs)
function createSongs(songs) {
  let fragment = document.createDocumentFragment()
  songs.forEach(song => {
    let li = document.createElement('li')
    li.innerHTML = `<ul class="list__child">
                        <li class="list__metadata"><span>Título:</span> ${song.title}</li>
                        <li class="list__metadata"><span>Duración:</span> ${song.duration}</li>
                        <li class="list__metadata"><span>Álbum:</span> ${song.album}</li>
                        <li class="list__metadata"><span>Artista:</span> ${song.group}</li>
                      </ul>`
    fragment.append(li)
  })
  return fragment
}

// create node object (list)
function createList(list) {
  let fragment = document.createDocumentFragment()
  list.forEach(list => {
    let li = document.createElement('li')
    list.list? qty = list.list.length : qty = list.list_id_song.length
    li.innerHTML = `<ul class="list__child">
                      <li class="list__metadata"><span>Título:</span> ${list.name}</li>
                      <li class="list__metadata"><span>Canciones:</span> ${qty}</li>
                      <li class="list__metadata"><span>Usuario:</span> ${list.name_user_creador}</li>
                    </ul>`
    fragment.append(li)
  })
  return fragment
}

// create node object (own)
function createOwn(list) {
  let fragment = document.createDocumentFragment()
  list.forEach(list => {
    let li = document.createElement('li')
    li.innerHTML = `<ul class="list__child">
                      <li class="list__metadata"><span>Título:</span> ${list.name}</li>
                      <li class="list__metadata"><span>Canciones:</span> ${list.list_id_song.length}</li>
                    </ul>`
    fragment.append(li)
  })
  return fragment
}

// get all data from user
var getUser = async (id) => {
  try {
    let FORM_DATA = new FormData()
    FORM_DATA.append('url', 'contenido')
    FORM_DATA.append('params', 'get-init')
    FORM_DATA.append('data', JSON.stringify({id_user: id}))
    // display the key/value pairs
    // for(let pair of FORM_DATA.entries()) {
    //   console.log(`${pair[0]}: ${pair[1]}`)
    // }
    const REQUEST = await fetch(`${API_URL}`, {
      method: 'POST',
      body: FORM_DATA,
      headers: {
        'KEY_MUSIC': 'Z9AQBQXUWDHRN5GYE3DUG52BTSFT1NMA'
      }
    })
    const RESULT = await REQUEST.json()
    const PROFILE = RESULT.response.profile[0]
    const OWN = RESULT.response.my_list
    const FAVORITES = RESULT.response.favorite_list[0].list_id_song
    const OTHERS = RESULT.response.follow_list
    const LIST = RESULT.response.all_list
    const SONGS = RESULT.response.all_songs
    printProfile(PROFILE)
    printFavList(FAVORITES)
    printOwnList(OWN)
    printOtherList(OTHERS)
    printAll(SONGS, LIST)
  } catch(err) {
    console.error(`Hubo un problema con la petición Fetch: Error ${err.status} - ${err.statusText}`)
  }
}
