import "./Page.css"

export const Page: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return <div className="page-container">{children}</div>
}
