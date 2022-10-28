import './app.css'
import App from './App.svelte'

import flamethrower from 'flamethrower-router'
const router = flamethrower({prefetch: 'visible', log: false, pageTransitions: false})

const app = new App({
  target: document.getElementById('app')
})

export default app

//   