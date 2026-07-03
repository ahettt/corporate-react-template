import { useEffect } from 'react'

const SUFFIX = 'Yalantis UA'

export function useDocumentTitle(text) {
  useEffect(() => {
    document.title = text ? `${text} - ${SUFFIX}` : SUFFIX
  }, [text])
}