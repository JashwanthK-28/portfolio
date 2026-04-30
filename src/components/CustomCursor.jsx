import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const cursorOuterRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorOuter = cursorOuterRef.current

    let mouseX = 0, mouseY = 0
    let outerX = 0, outerY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = `${mouseX - 6}px`
      cursor.style.top = `${mouseY - 6}px`
    }

    const animate = () => {
      outerX += (mouseX - outerX) * 0.12
      outerY += (mouseY - outerY) * 0.12
      if (cursorOuter) {
        cursorOuter.style.left = `${outerX - 20}px`
        cursorOuter.style.top = `${outerY - 20}px`
      }
      requestAnimationFrame(animate)
    }

    const onMouseEnterLink = () => {
      cursor.style.transform = 'scale(2)'
      cursorOuter.style.transform = 'scale(1.5)'
      cursorOuter.style.borderColor = '#01BAEF'
    }

    const onMouseLeaveLink = () => {
      cursor.style.transform = 'scale(1)'
      cursorOuter.style.transform = 'scale(1)'
      cursorOuter.style.borderColor = 'rgba(201,241,56,0.4)'
    }

    document.addEventListener('mousemove', onMouseMove)
    animate()

    const links = document.querySelectorAll('a, button')
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink)
      link.addEventListener('mouseleave', onMouseLeaveLink)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={cursorOuterRef}
        className="fixed w-10 h-10 rounded-full pointer-events-none z-[9998] border border-accent/40"
        style={{ willChange: 'transform', transition: 'transform 0.3s ease, border-color 0.3s ease' }}
      />
    </>
  )
}
