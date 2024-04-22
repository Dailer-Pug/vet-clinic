import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import { IStyledComponent, Substitute } from "styled-components/dist/types"
import { ButtonGhost, ButtonOutline, ButtonStyled } from "./Button.style"

type ButtonCoreProps = {
  size?: number,
  Component: IStyledComponent<"web",
    Substitute<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
      size: number,
      color: string
    }>>,
  children?: string,
  color?: string,
}
const ButtonCore = ({ size = 20, Component, color = "blue", children }: ButtonCoreProps) => {

  if (Component) {
    return <Component color={color} size={size}>{children}</Component>
  }
  return (
    <ButtonStyled color={color} size={size}>Click</ButtonStyled>
  )
}
type ButtonProps = {
  size?: number,
  primary?: boolean,
  outline?: boolean,
  ghost?: boolean,
  children?: string,
  color?: string,
}
export const Button = ({ children, size, primary, outline, ghost, color, ...props }: ButtonProps) => {
  if (primary) {
    return <ButtonCore color={color} size={size}  {...props} Component={ButtonStyled}>{children}</ButtonCore>
  }
  if (outline) {
    return <ButtonCore color={color} size={size} {...props} Component={ButtonOutline}>{children}</ButtonCore>
  }
  if (ghost) {
    return <ButtonCore color={color} size={size} {...props} Component={ButtonGhost}>{children}</ButtonCore>
  }
  return 'No primary button found'
}


