import { Router } from "./router.js"

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/exploration", "/pages/exploration.html")
router.add("/the-universe", "/pages/the-universe.html")
router.add(404, "/pages/home.html")

router.handle()
window.onpopstate = () => router.handle()

const state = { active: "home" }

document.addEventListener('click', (event) => {
  const navItens = ['home', 'exploration', 'universe']
  const clicked = event.target.id 
  if (!navItens.includes(clicked)) {
    return
  }
  
  document.documentElement.classList.remove(state.active)
  document.documentElement.classList.add(clicked)

  state.active = clicked
  router.route()
})




