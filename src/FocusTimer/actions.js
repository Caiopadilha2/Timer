import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'

export function toggleRunning () {
  // console.log('toggle running function')
  // state.isRunning = !state.isRunning
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countDown()

}

export function set() {
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove('running')
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on')
}