import { useState, JSX } from "react"
import { CollapseForm, Text } from "./Collapse.styled"


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
    <CollapseForm >
      <Text onClick={change}>{tittle}</Text>
      {
        active && children
      }
    </CollapseForm>
  )
}
