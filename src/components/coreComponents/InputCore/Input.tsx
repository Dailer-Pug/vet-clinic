import { IStyledComponent } from "styled-components"
import { Substitute } from "styled-components/dist/types"
import { InputGhost, InputStyled } from "./Input.style"

type InputCoreProps = {
  size?: number,
  Component: IStyledComponent<"web",
    Substitute<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {
      size?: number | undefined;
    }>>
  ,
  type?: string,
  value?: string
}

const InputCore = ({ size = 20, Component, value }: InputCoreProps) => {

  if (Component) {
    return (
      <Component placeholder={value} size={size}></Component>
    )
  }
  return (
    <InputStyled size={size}>Input primary is not found</InputStyled>
  )
}

type InputProps = {
  size?: number,
  primary?: boolean,
  ghost?: boolean,
  form?: string,
  type?: string,
  placeholder?: string
}

export const Input = ({ size, ghost, primary, type, placeholder, ...props }: InputProps) => {

  if (primary) {
    return <InputCore {...props} value={placeholder} type={type} size={size} Component={InputStyled} />
  }

  if (ghost) {
    return <InputCore {...props} value={placeholder} type={type} size={size} Component={InputGhost} />
  }

  return (
    "No Primary input found"
  )

}
