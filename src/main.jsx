import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import MagicBentoEffect from './MagicBentoEffect.jsx'
import heroCartoon from './assets/hero-cartoon.webp'
import profilePhoto from '../tupian/gerenzhaopian.jpg'
import dronersVideo from '../shiping/droners_cut.mp4'
import totallySpiesVideo from '../shiping/TC_cut.mp4'
import imagoVideo from '../shiping/Imago_cut.mp4'
import momoVideo from '../shiping/momo_cut.mp4'
import aiDemoVideo from '../shiping/AIdemo.mp4'
import gameAnimationVideo from '../shiping/game_AN.mp4'
import zzmd1Image from '../tupian/zzmd.jpg'
import zzmd2Image from '../tupian/zzmd2.jpg'
import zzmd3Image from '../tupian/zzmd3.jpg'
import zzmd4Image from '../tupian/zzmd4.jpg'
import zzmd1Thumb from './assets/zzmd-thumb.webp'
import zzmd2Thumb from './assets/zzmd2-thumb.webp'
import zzmd3Thumb from './assets/zzmd3-thumb.webp'
import zzmd4Thumb from './assets/zzmd4-thumb.webp'

const text = {
  navResume: '\u7b80\u5386',
  navProjects: '\u9879\u76ee',
  navStrengths: '\u4f18\u52bf',
  contactMe: '\u8054\u7cfb\u6211',
  portfolio: '\u4f5c\u54c1\u96c6',
  viewWorks: '\u67e5\u770b\u4f5c\u54c1',
  sendEmail: '\u53d1\u9001\u90ae\u4ef6',
  about: '\u5173\u4e8e\u6211',
  selectedProjects: '\u7cbe\u9009\u9879\u76ee',
  strengths: '\u4e2a\u4eba\u4f18\u52bf',
  portraitLabel: '\u5361\u901a\u4eba\u7269\u5934\u50cf',
  location: '\u73b0\u5c45',
  birthday: '\u751f\u65e5',
  phone: '\u7535\u8bdd',
  email: '\u90ae\u7bb1',
  education: '\u6559\u80b2',
  closingTitle: '\u671f\u5f85\u548c\u4f60\u4e00\u8d77\u8ba9\u89d2\u8272\u52a8\u8d77\u6765',
  closingText: '\u53ef\u63d0\u4f9b\u4e8c\u7ef4\u89d2\u8272\u52a8\u753b\u3001\u6e38\u620f\u52a8\u4f5c\u8868\u6f14\u3001\u4e2d\u671f\u52a8\u753b\u5236\u4f5c\u4e0e\u540e\u671f\u5408\u6210\u914d\u5408\u3002',
}

const profile = {
  name: '\u6768\u5b87\u8fb0',
  title: '\u4e8c\u7ef4\u52a8\u753b\u5e08 / \u6e38\u620f\u52a8\u753b\u5e08',
  location: '\u4e0a\u6d77',
  phone: '13104453690',
  email: '779647405@qq.com',
  birthday: '1997.12.19',
  education: '\u5409\u6797\u52a8\u753b\u5b66\u9662 \u00b7 \u4e8c\u7ef4\u52a8\u753b\u5236\u4f5c \u672c\u79d1',
  summary:
    '\u52a8\u753b\u672c\u79d1\u51fa\u8eab\uff0c\u5177\u5907\u624e\u5b9e\u7684\u4e8c\u7ef4\u52a8\u753b\u5236\u4f5c\u529f\u5e95\uff0c6\u5e74\u4ece\u4e1a\u7ecf\u9a8c\u6db5\u76d6\u56fd\u9645\u52a8\u753b\u5267\u96c6\u548c\u6e38\u620f\u52a8\u753b\u4e24\u5927\u9886\u57df\u3002\u6ce8\u91cd\u52a8\u753b\u8868\u6f14\u7684\u7ec6\u8282\u548c\u8282\u594f\uff0c\u80fd\u591f\u6839\u636e\u9879\u76ee\u9700\u6c42\u7075\u6d3b\u8c03\u6574\u52a8\u753b\u98ce\u683c\u3002',
}

const projects = [
  {
    title: '\u53d1\u6761\u603b\u52a8\u5458',
    type: '\u4e8c\u7ef4\u6e38\u620f\u52a8\u753b',
    period: '\u4e0a\u6d77\u6c90\u77b3\u79d1\u6280',
    detail:
      '\u8d1f\u8d23\u6e38\u620f\u4e2d\u4e8c\u7ef4\u89d2\u8272\u52a8\u4f5c\u8868\u6f14\u52a8\u753b\u8bbe\u8ba1\u4e0e\u5236\u4f5c\uff0c\u6839\u636e\u89d2\u8272\u8bbe\u5b9a\u548c\u5267\u60c5\u9700\u6c42\u8bbe\u8ba1\u52a8\u4f5c\u8868\u73b0\uff0c\u5e76\u4e0e\u5916\u5305\u56e2\u961f\u5bf9\u63a5\u8fdb\u5ea6\u3001\u98ce\u683c\u548c\u4ea4\u4ed8\u8d28\u91cf\u3002',
    accent: 'mint',
    video: gameAnimationVideo,
  },
  {
    title: 'Droners \u7b2c\u4e00\u5b63 / \u7b2c\u4e8c\u5b63',
    type: '\u56fd\u9645\u52a8\u753b\u5267\u96c6',
    period: '\u98de\u4f97\u52a8\u6f2b\u5236\u4f5c\u6709\u9650\u516c\u53f8',
    detail:
      '\u53c2\u4e0e\u89d2\u8272\u4e0e\u9053\u5177\u7ed1\u5b9a\u3001\u4e2d\u671f Keypose\u3001\u89d2\u8272\u52a8\u4f5c\u8bbe\u8ba1\u3001\u5173\u952e\u5e27\u5236\u4f5c\u4e0e\u52a8\u753b\u8282\u594f\u628a\u63a7\uff0c\u914d\u5408\u56fd\u9645\u56e2\u961f\u7edf\u4e00\u6574\u4f53\u52a8\u753b\u98ce\u683c\u3002',
    accent: 'sun',
      video: dronersVideo,
  },
    {
      title: 'Totally Spies',
      type: '\u56fd\u9645\u52a8\u753b\u9879\u76ee',
      period: '\u98de\u4f97\u52a8\u6f2b\u5236\u4f5c\u6709\u9650\u516c\u53f8',
      detail:
        '\u6839\u636e\u5206\u955c\u5934\u53f0\u672c\u548c\u89d2\u8272\u5e93\u72ec\u7acb\u5b8c\u6210 Totally Spies \u52a8\u753b\u955c\u5934\u5236\u4f5c\uff0c\u914d\u5408\u9879\u76ee\u98ce\u683c\u8fdb\u884c\u8868\u6f14\u8282\u594f\u548c\u753b\u9762\u6548\u679c\u8c03\u6574\u3002',
      accent: 'rose',
      video: totallySpiesVideo,
    },
    {
      title: 'Imago',
      type: '\u56fd\u9645\u52a8\u753b\u9879\u76ee',
      period: '\u98de\u4f97\u52a8\u6f2b\u5236\u4f5c\u6709\u9650\u516c\u53f8',
      detail:
        '\u53c2\u4e0e Imago \u52a8\u753b\u955c\u5934\u5236\u4f5c\uff0c\u52a0\u5165\u9053\u5177\u5e76\u914d\u5408\u7279\u6548\u8c03\u6574\u52a8\u4f5c\u8282\u594f\uff0c\u4fdd\u8bc1\u955c\u5934\u8868\u6f14\u548c\u753b\u9762\u6548\u679c\u3002',
      accent: 'sky',
      video: imagoVideo,
    },
  {
    title: '\u5c0f\u7ae0\u9c7c\u58a8\u58a8',
    type: '\u56fd\u5185\u52a8\u753b\u9879\u76ee',
    period: '\u7231\u5947\u827a\u5e73\u53f0\u9879\u76ee',
    detail:
      '\u53c2\u4e0e\u4e2d\u671f\u52a8\u753b\u5236\u4f5c\uff0c\u8d1f\u8d23\u89d2\u8272\u52a8\u753b\u8868\u6f14\uff0c\u5e76\u534f\u52a9\u540e\u671f\u7279\u6548\u5236\u4f5c\u5b8c\u6210\u52a8\u753b\u6210\u7247\u3002',
    accent: 'sky',
    video: momoVideo,
  },
    {
      title: 'AI\u6e38\u620f Demo',
      type: 'AI\u6e38\u620f\u52a8\u753b Demo',
      period: '\u4e2a\u4eba\u5b9e\u9a8c\u9879\u76ee',
      detail:
        '\u5229\u7528AI\u8f85\u52a9\u5236\u4f5c\u4e2a\u4eba\u8bbe\u8ba1\u7684\u5c0f\u6e38\u620fdemo\uff0c\u9a8c\u8bc1\u4e2a\u4eba\u6e38\u620f\u7684\u5e95\u5c42\u903b\u8f91\u8bbe\u8ba1\u662f\u5426\u5408\u7406\uff0c\u9a8c\u8bc1\u5982\u4f55\u5c06\u5373\u65f6\u53cd\u9988\u548c\u6e38\u620f\u60c5\u5883\u66f4\u597d\u7684\u7ed3\u5408\u3002',
      accent: 'mint',
      video: aiDemoVideo,
    },
]

const strengths = [
  ['\u89d2\u8272\u8868\u6f14', '\u64c5\u957f\u4ece\u89d2\u8272\u6027\u683c\u548c\u5267\u60c5\u9700\u6c42\u51fa\u53d1\uff0c\u8bbe\u8ba1\u6e05\u6670\u3001\u6709\u8282\u594f\u7684\u52a8\u4f5c\u8868\u6f14\u3002'],
  ['\u8282\u594f\u628a\u63a7', '\u719f\u6089\u5173\u952e\u5e27\u3001\u4e2d\u95f4\u753b\u3001\u6e05\u7406\u548c\u955c\u5934\u5185\u52a8\u4f5c\u8282\u594f\uff0c\u91cd\u89c6\u8fd0\u52a8\u89c4\u5f8b\u4e0e\u89c2\u770b\u4f53\u9a8c\u3002'],
  ['\u6e38\u620f\u52a8\u753b', '\u7406\u89e3\u6e38\u620f\u89c6\u89c9\u53cd\u9988\u3001\u52a8\u4f5c\u8bc6\u522b\u5ea6\u3001\u5faa\u73af\u8854\u63a5\u4e0e\u5916\u5305\u534f\u4f5c\u6d41\u7a0b\u3002'],
  ['\u540e\u671f\u5408\u6210', '\u5177\u5907 AE\u3001PR \u540e\u671f\u7ecf\u9a8c\uff0c\u53c2\u4e0e\u8fc7\u516c\u53f8\u591a\u4e2a\u540e\u671f\u9879\u76ee\uff0c\u80fd\u914d\u5408\u7279\u6548\u63d0\u5347\u753b\u9762\u8868\u73b0\u529b\u3002'],
  ['\u56fd\u9645\u534f\u4f5c', '\u53c2\u4e0e\u591a\u90e8\u56fd\u9645\u52a8\u753b\u5267\u96c6\u9879\u76ee\uff0c\u80fd\u591f\u6839\u636e\u9879\u76ee\u89c4\u8303\u9002\u914d\u4e0d\u540c\u52a8\u753b\u98ce\u683c\u3002'],
  ['\u5de5\u5177\u719f\u7ec3', '\u719f\u7ec3\u4f7f\u7528 Toon Boom Harmony\u3001Adobe Animate\u3001Moho\u3001Spine\u3001After Effects\u3001Premiere\u3002'],
]

const resultImages = [
  { src: zzmd1Image, thumb: zzmd1Thumb, alt: '\u9879\u76ee\u6210\u679c 01' },
  { src: zzmd2Image, thumb: zzmd2Thumb, alt: '\u9879\u76ee\u6210\u679c 02' },
  { src: zzmd3Image, thumb: zzmd3Thumb, alt: '\u9879\u76ee\u6210\u679c 03' },
  { src: zzmd4Image, thumb: zzmd4Thumb, alt: '\u9879\u76ee\u6210\u679c 04' },
]

const skills = ['TB Harmony', 'Adobe Animate', 'Moho', 'Spine', 'After Effects', 'Premiere']

const timeline = {
  mutongTitle: '\u4e0a\u6d77\u6c90\u77b3\u79d1\u6280 \u00b7 \u4e8c\u7ef4\u6e38\u620f\u52a8\u753b\u5e08',
  mutongBody: '\u53c2\u4e0e\u300a\u53d1\u6761\u603b\u52a8\u5458\u300b\u6e38\u620f\u52a8\u753b\u5236\u4f5c\uff0c\u8d1f\u8d23\u4e8c\u7ef4\u89d2\u8272\u52a8\u4f5c\u8868\u6f14\u52a8\u753b\u8bbe\u8ba1\u4e0e\u5236\u4f5c\u3002',
  feidongTitle: '\u98de\u4f97\u52a8\u6f2b\u5236\u4f5c\u6709\u9650\u516c\u53f8 \u00b7 \u52a8\u753b\u5e08',
  feidongBody: '\u53c2\u4e0e Droners\u3001Imago\u3001Totally Spies\u3001\u5c0f\u7ae0\u9c7c\u58a8\u58a8\u7b49\u52a8\u753b\u9879\u76ee\uff0c\u8d1f\u8d23\u4e2d\u671f\u52a8\u753b\u3001\u89d2\u8272\u52a8\u4f5c\u548c\u540e\u671f\u914d\u5408\u3002',
}

function HeroVideo() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frame = 0
    let rafId = 0
    let isVisible = true

    const resize = () => {
      const ratio = window.devicePixelRatio || 1
      canvas.width = Math.floor(canvas.clientWidth * ratio)
      canvas.height = Math.floor(canvas.clientHeight * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const drawFrame = () => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      context.clearRect(0, 0, width, height)
      context.strokeStyle = 'rgba(43, 49, 64, 0.14)'
      context.lineWidth = 5

      for (let i = 0; i < 7; i += 1) {
        context.beginPath()
        const y = height - 112 + Math.sin(frame * 0.025 + i) * 10
        context.moveTo(-120, y - i * 18)
        context.bezierCurveTo(width * 0.2, y - 70, width * 0.38, y + 50, width * 0.56, y - 18)
        context.bezierCurveTo(width * 0.72, y - 72, width * 0.86, y + 34, width + 140, y - 24)
        context.stroke()
      }

      frame += 1
    }

    const draw = () => {
      if (!isVisible || document.hidden) {
        rafId = 0
        return
      }

      drawFrame()
      rafId = requestAnimationFrame(draw)
    }

    const start = () => {
      if (!rafId && isVisible && !document.hidden) {
        rafId = requestAnimationFrame(draw)
      }
    }

    const stop = () => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = 0
    }

    const handleVisibilityChange = () => {
      if (document.hidden) stop()
      else start()
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
        if (isVisible) start()
        else stop()
      },
      { threshold: 0.01 },
    )

    resize()
    drawFrame()
    observer.observe(canvas)
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    start()

    return () => {
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      observer.disconnect()
      stop()
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-video" aria-hidden="true" />
}
function LazyProjectVideo({ src, title }) {
  const videoRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video || shouldLoad) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShouldLoad(true)
        observer.disconnect()
      },
      { rootMargin: '650px 0px', threshold: 0.01 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [shouldLoad])

  useEffect(() => {
    const video = videoRef.current
    if (shouldLoad && video) video.load()
  }, [shouldLoad, src])

  return (
    <video
      ref={videoRef}
      className="project-video"
      src={shouldLoad ? src : undefined}
      controls
      muted
      loop
      playsInline
      preload={shouldLoad ? "metadata" : "none"}
      aria-label={title}
    />
  )
}
function ProjectCard({ project, index }) {
  return (
    <article className={`project-card ${project.accent}`}>
      <div className="project-copy">
        <strong className="project-index">{String(index + 1).padStart(2, '0')}</strong>
        <p>{project.type}</p>
        <h3>{project.title}</h3>
        <span>{project.period}</span>
        <p>{project.detail}</p>
      </div>
      <div className="project-media">
        {project.video ? (
          <LazyProjectVideo src={project.video} title={project.title} />
        ) : (
          <>
            <div className="stage-lines">
              <span />
              <span />
              <span />
            </div>
            <div className="character">
              <div className="head" />
              <div className="body" />
              <div className="arm left" />
              <div className="arm right" />
              <div className="leg left" />
              <div className="leg right" />
            </div>
            <span className="video-label">VIDEO PLACEHOLDER</span>
          </>
        )}
      </div>
    </article>
  )
}

function App() {
  return (
    <main>
      <MagicBentoEffect />
      <section className="hero" id="top">
        <img className="hero-bg hero-bg-blur" src={heroCartoon} alt="" aria-hidden="true" decoding="async" fetchPriority="high" />
        <img className="hero-bg hero-bg-clear" src={heroCartoon} alt="" aria-hidden="true" decoding="async" fetchPriority="high" />
        <div className="hero-shade" />
        <HeroVideo />
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top">{profile.name}</a>
          <div className="nav-links">
            <a href="#resume">{text.navResume}</a>
            <a href="#projects">{text.navProjects}</a>
            <a href="#strengths">{text.navStrengths}</a>
          </div>
          <a className="contact-button" href="#contact">{text.contactMe}</a>
        </nav>
        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">2D Animation Portfolio</p>
            <div className="portfolio-mark" aria-hidden="true">PORTFOLIO</div>
            <h1>{text.portfolio}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-text">
              {'\u7528\u89d2\u8272\u8868\u6f14\u3001\u52a8\u4f5c\u8282\u594f\u548c\u955c\u5934\u611f\uff0c\u628a\u89d2\u8272\u4ece\u8bbe\u5b9a\u7eb8\u5e26\u5230\u5c4f\u5e55\u4e0a\u3002'}
            </p>
          </div>
        </div>
      </section>

      <section className="resume section-shell" id="resume">
        <div className="section-heading">
          <p>Resume</p>
          <h2>{text.about}</h2>
        </div>
        <div className="resume-grid">
          <div className="portrait-card portrait-photo-card" aria-label={text.portraitLabel}>
            <img className="profile-photo" src={profilePhoto} alt="杨宇辰个人照片" loading="lazy" decoding="async" />
          </div>
          <div className="resume-copy resume-board">
              <div className="resume-intro-block">
                <div className="resume-identity">
                  <p className="resume-date">{profile.birthday}</p>
                  <p className="resume-name">{profile.name}</p>
                </div>
                <p className="intro">{profile.summary}</p>
                <div className="resume-mini-meta">
                  <span>{text.location}{'\uff1a'}{profile.location}</span>
                  <span>{text.phone}{'\uff1a'}{profile.phone}</span>
                  <span>{text.email}{'\uff1a'}{profile.email}</span>
                </div>
              </div>
              <div className="resume-lines">
                <section className="resume-line">
                  <h3>Education</h3>
                  <p>{profile.education}</p>
                </section>
                <section className="resume-line resume-tools-line">
                  <h3>Tools</h3>
                  <div className="resume-tool-list">
                    {skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </section>
                <section className="resume-line resume-experience-line">
                  <h3>Experience</h3>
                  <div>
                    <p><strong>2024.04 - 2026.07</strong>{timeline.mutongTitle}</p>
                    <p><strong>2020.01 - 2024.02</strong>{timeline.feidongTitle}</p>
                  </div>
                </section>
                <section className="resume-line resume-hobby-line">
                  <h3>Hobby</h3>
                  <p>电影、游戏、动画、爵士乐 / Funk</p>
                </section>
              </div>
            </div>
          </div>
        </section>

      <section className="projects section-shell" id="projects">
        <div className="section-heading">
          <p>Selected Projects</p>
          <h2>{text.selectedProjects}</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.title} />
          ))}
        </div>
      </section>

      <section className="strengths section-shell" id="strengths">
        <div className="section-heading">
          <p>Strengths</p>
          <h2>{text.strengths}</h2>
        </div>
        <div className="strength-grid">
          {strengths.map(([title, body]) => (
            <article className="strength-card" key={title}>
              <span aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="result-strip" aria-label="项目成果">
          <div className="result-strip-head">
            <p>Project Results</p>
            <h3>项目成果</h3>
          </div>
          <div className="result-gallery">
            {resultImages.map((image, index) => (
              <a href={image.src} target="_blank" rel="noreferrer" className="result-thumb" key={image.alt} aria-label={`放大查看项目成果 ${index + 1}`}>
                <img src={image.thumb} alt={image.alt} loading="lazy" decoding="async" />
              </a>
            ))}
          </div>
        </div>
        <div className="skill-ribbon">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="closing" id="contact">
        <div>
          <p className="eyebrow">Let's Animate</p>
          <h2>{text.closingTitle}</h2>
          <p>{text.closingText}</p>
          <div className="contact-lines">
            <a href={`tel:${profile.phone}`}>{text.phone}{'\uff1a'}{profile.phone}</a>
            <a href={`mailto:${profile.email}`}>{text.email}{'\uff1a'}{profile.email}</a>
          </div>
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)






























