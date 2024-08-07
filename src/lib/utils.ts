import DOMPurify from "dompurify"
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
