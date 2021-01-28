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