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

export function formatDate(createdAt: number) {
  const theDate = new Date(createdAt)
  const day = String(theDate.getDate()).padStart(2, "0")
  const month = theDate.toLocaleString("en-US", { month: "short" })
  const year = theDate.getFullYear()
  return `${month}/${day}/${year}`
}
