import { useEffect } from 'react'

const setMeta = (selector, attribute, key, content) => {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

export function useDocumentMeta({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | WESTZONE SALON` : 'WESTZONE SALON | Kigali, Rwanda'
    document.title = fullTitle

    if (description) {
      setMeta('meta[name="description"]', 'name', 'description', description)
      setMeta('meta[property="og:description"]', 'property', 'og:description', description)
      setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle)
    }
  }, [title, description])
}
