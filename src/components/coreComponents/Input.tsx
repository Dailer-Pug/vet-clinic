import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import { IStyledComponent } from "styled-components"
import { Substitute } from "styled-components/dist/types"
import { InputStyled } from "./Input.style"


type InputCoreProps = {
  size?: number,
  Component: IStyledComponent<"web", Substitute<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {
    size?: number | undefined;
  }>>
  ,
  type: string
}

const InputCore = ({ size = 20, Component }: InputCoreProps) => {

  if (Component) {
    return (
      <Component size={size}></Component>
    )
  }
  return (
    <InputStyled size={size}>"Input primary is not found"</InputStyled>
  )
}

type InputProps = {
  size: number,
  primary: string,
  dropout: string,
  form: string,
  type: string
}

export const Input = ({ size, primary, dropout, form, type, ...props }: InputProps) => {

  if (primary) {
    return <InputCore {...props} type={type} size={size} Component={InputStyled} />
  }

  return (
    "No Primary input found"
  )

}
