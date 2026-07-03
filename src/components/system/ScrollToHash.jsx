import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// Миттєвий скрол угору, незалежно від глобального scroll-behavior: smooth
function scrollToTopInstant() {
  const html = document.documentElement
  const prev = html.style.scrollBehavior
  html.style.scrollBehavior = 'auto'
  window.scrollTo(0, 0)
  html.style.scrollBehavior = prev
}

export default function ScrollToHash() {
  const { pathname, hash } = useLocation()
  const prevPath = useRef(pathname)

  useEffect(() => {
    const pathChanged = prevPath.current !== pathname
    prevPath.current = pathname

    // Немає хеша → нова сторінка починається зверху
    if (!hash) {
      scrollToTopInstant()
      return
    }

    // Є хеш. Якщо це ще й перехід на іншу сторінку — спершу на верх,
    // щоб не «зависнути» на позиції попередньої, поки шукаємо ціль.
    if (pathChanged) scrollToTopInstant()

    const id = decodeURIComponent(hash.slice(1))
    let tries = 0
    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (tries < 15) {
        tries += 1
        requestAnimationFrame(tryScroll) // секція ще монтується
      }
      // не знайдено (таб-хеш або неіснуючий якір) → лишаємось зверху
    }
    requestAnimationFrame(tryScroll)
  }, [pathname, hash])

  return null
}