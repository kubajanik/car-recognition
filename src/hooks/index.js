import React from 'react'

export const useInstallPrompt = () => {
  const [event, setEvent] = React.useState(null)

  const ready = event => {
    event.preventDefault()
    setEvent(event)
  }

  const install = () => event?.prompt()

  React.useEffect(() => {
    window.addEventListener('beforeinstallprompt', ready)

    return () => window.removeEventListener('beforeinstallprompt', ready)
  }, [])

  return [event, install]
}

export const usePrimaryColor = () => {
  const [color, setColor] = React.useState(() => localStorage.getItem('color') || '#fd3f3f')

  React.useEffect(() => {
    document.body.style.setProperty('--primary-color', color)
    document.querySelector('meta[name=theme-color]').setAttribute('content', color)
    localStorage.setItem('color', color)
  }, [color])

  return [color, setColor]
}