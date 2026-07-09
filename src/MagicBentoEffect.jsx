import { useEffect } from 'react'

const TARGET_SELECTOR = [
  '.brand',
  '.contact-button',
  '.nav-links',
  '.portrait-card',
  '.resume-copy',
  '.info-grid span',
  '.timeline div',
  '.project-card',
  '.strength-card',
  '.skill-ribbon span',
  '.contact-lines a',
].join(',')

const MOTION_TARGETS = [
  '.section-heading p',
  '.section-heading h2',
  '.portrait-card',
  '.resume-copy',
  '.info-grid span',
  '.timeline div',
  '.project-card',
  '.strength-card',
  '.skill-ribbon span',
  '.closing .eyebrow',
  '.closing h2',
  '.closing p:not(.eyebrow)',
  '.contact-lines a',
].join(',')

const GLOW_COLOR = '243, 201, 111'
const MOBILE_BREAKPOINT = 768

function setupOpening() {
  document.body.classList.add('is-opening')

  const readyTimer = window.setTimeout(() => {
    document.body.classList.add('opening-complete')
  }, 180)

  const doneTimer = window.setTimeout(() => {
    document.body.classList.remove('is-opening')
  }, 2850)

  return () => {
    window.clearTimeout(readyTimer)
    window.clearTimeout(doneTimer)
    document.body.classList.remove('is-opening')
  }
}

function setupScrollMotion() {
  const sections = Array.from(document.querySelectorAll('.section-shell, .closing'))
  sections.forEach((section) => section.classList.add('motion-section'))

  const motionTargets = Array.from(document.querySelectorAll(MOTION_TARGETS))
  motionTargets.forEach((element, index) => {
    element.classList.add('motion-reveal')

    if (element.matches('.section-heading h2, .closing h2')) {
      element.classList.add('motion-title')
    }

    const group = element.closest('.project-grid, .strength-grid, .result-gallery, .skill-ribbon, .contact-lines, .info-grid, .timeline, .resume-lines, .resume-tool-list, .resume-mini-meta')
    const siblings = group ? Array.from(group.children) : []
    const groupedIndex = group ? Math.max(0, siblings.indexOf(element)) : index % 2
    element.style.setProperty('--motion-index', String(groupedIndex))
  })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const section = entry.target
        section.classList.add('is-visible')

        const targets = Array.from(section.querySelectorAll('.motion-reveal'))
        targets.forEach((target) => {
          const index = Number(target.style.getPropertyValue('--motion-index')) || 0
          const isProject = target.classList.contains('project-card')
          const isTitle = target.classList.contains('motion-title')
          const duration = isProject ? 1340 : isTitle ? 1360 : 1220
          const delay = isTitle ? 60 : 180 + index * (isProject ? 180 : 110)
          window.setTimeout(() => {
            target.classList.add('motion-done')
          }, delay + duration + 80)
        })

        observer.unobserve(section)
      })
    },
    {
      threshold: 0.04,
      rootMargin: '0px 0px -6% 0px',
    },
  )

  sections.forEach((section) => observer.observe(section))
  return () => observer.disconnect()
}

function setupHoverSurfaces() {
  const isMobile = window.innerWidth <= MOBILE_BREAKPOINT
  if (isMobile) return () => {}

  const elements = Array.from(document.querySelectorAll(TARGET_SELECTOR)).filter(
    (element) => !element.closest('.hero-copy'),
  )

  const cleanups = []

  elements.forEach((element) => {
    element.classList.add('magic-bento-surface')
    element.style.setProperty('--magic-glow-color', GLOW_COLOR)

    let rafId = 0

    const updatePosition = (event) => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        const relativeX = (x / rect.width) * 100
        const relativeY = (y / rect.height) * 100
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 2.8
        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -2.8
        const lift = element.classList.contains('project-card') ? -4 : -2

        element.style.setProperty('--magic-x', `${relativeX}%`)
        element.style.setProperty('--magic-y', `${relativeY}%`)
        element.style.setProperty('--magic-intensity', '1')
        element.style.transform = `translateY(${lift}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      })
    }

    const handleEnter = (event) => {
      element.classList.add('magic-bento-surface--active')
      updatePosition(event)
    }

    const handleLeave = () => {
      if (rafId) cancelAnimationFrame(rafId)
      element.classList.remove('magic-bento-surface--active')
      element.style.setProperty('--magic-intensity', '0')
      element.style.transform = ''
    }

    const handleClick = (event) => {
      const rect = element.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const ripple = document.createElement('span')
      ripple.className = 'magic-ripple'
      ripple.style.left = `${x}px`
      ripple.style.top = `${y}px`
      element.appendChild(ripple)
      window.setTimeout(() => ripple.remove(), 780)
    }

    element.addEventListener('pointerenter', handleEnter)
    element.addEventListener('pointermove', updatePosition)
    element.addEventListener('pointerleave', handleLeave)
    element.addEventListener('click', handleClick)

    cleanups.push(() => {
      if (rafId) cancelAnimationFrame(rafId)
      element.removeEventListener('pointerenter', handleEnter)
      element.removeEventListener('pointermove', updatePosition)
      element.removeEventListener('pointerleave', handleLeave)
      element.removeEventListener('click', handleClick)
      element.classList.remove('magic-bento-surface', 'magic-bento-surface--active')
      element.style.removeProperty('--magic-glow-color')
      element.style.removeProperty('--magic-x')
      element.style.removeProperty('--magic-y')
      element.style.removeProperty('--magic-intensity')
      element.style.transform = ''
    })
  })

  return () => cleanups.forEach((cleanup) => cleanup())
}

export default function MagicBentoEffect() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      document.body.classList.add('opening-complete')
      return undefined
    }

    const cleanupOpening = setupOpening()
    const cleanupScrollMotion = setupScrollMotion()
    const cleanupHover = setupHoverSurfaces()

    return () => {
      cleanupOpening()
      cleanupScrollMotion()
      cleanupHover()
    }
  }, [])

  return null
}




