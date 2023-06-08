import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function useContactHeading(){
  const location = useLocation()
  const [content, setContent] = useState('')

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setContent('Contact us')
        break
      case '/about':
        setContent('Let’s get acquainted')
        break
      case '/products':
        setContent('Haven’t found what you were looking for?')
        break
      case '/blog':
        setContent('Contact us')
        break
    }
  },[])

  return content
}