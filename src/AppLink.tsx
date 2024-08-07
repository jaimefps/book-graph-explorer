import { Link, LinkProps } from "react-router-dom"
import "./AppLink.css"
import cs from "clsx"

export const AppLink: React.FC<LinkProps> = (props) => {
  return <Link {...props} className={cs("applink-base", props.className)} />
}
