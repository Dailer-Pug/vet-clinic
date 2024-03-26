import { useState, JSX } from "react"


type CollapseProps = {
  tittle: string,
  children: JSX.Element | JSX.Element[]
}
export const Collapse = ({ tittle, children }: CollapseProps) => {

  const [active, setActive] = useState(false)

  const change = () => {
    setActive(!active)
  }
  return (
    <div className="collapse_form">
      <b className="collapse_tittle" onClick={change}>{tittle}</b>
      {
        active && children
      }
    </div>
  )
}
