import DOMPurify from "dompurify"
import { useRef, useEffect } from "react"
// import q from "query-string"

// DOMPurify prevents script injections:
export function handlebars(input: string) {
  const pattern = /{{\s*([^|]+)\s*\|\s*([^}]+)\s*}}/g
  return input.replace(pattern, (match, left, right) => {
    return `
    <span 
      className="text-correction"
      title="A mistake in the translation was replaced: ${left.trim()}"
    >
      ${DOMPurify.sanitize(right.trim())}
    </span>`
  })
}

export function usePrevious(value: any) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}
