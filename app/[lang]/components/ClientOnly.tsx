'use client'
import React, { useEffect, useState } from 'react'
import AOS from 'aos'

interface ClientOnlyProps {
  children: React.ReactNode
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)

    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 50,
      duration: 600,
      easing: 'cubic-bezier(0.77, 0, 0.175, 1)' as any,
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    })
  }, [])

  if (!hasMounted) {
    return null
  }

  return <>{children}</>
}

export default ClientOnly
