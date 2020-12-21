const sounds = ['bark', 'cough', 'gameover', 'notification', 'sneeze', 'yawn']

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerText = sound

  btn.addEventListener('click', () => {
    pauseSongs()
    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(btn)
})

function pauseSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)
    song.pause()
    song.currentTime = 0
  })
}
