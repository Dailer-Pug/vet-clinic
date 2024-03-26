import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import { IStyledComponent, Substitute } from "styled-components/dist/types"
import { ButtonGhost, ButtonOutline, ButtonStyled } from "./Button.style"

type ButtonCoreProps = {
  size?: number,
  Component: IStyledComponent<"web",
    Substitute<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, { size: number }>>,
  children?: string,
}
const ButtonCore = ({ size = 20, Component, children }: ButtonCoreProps) => {

  if (Component) {
    return <Component size={size}>{children}</Component>
  }
  return (
    <ButtonStyled size={size}>Click</ButtonStyled>
  )
}
type ButtonProps = {
  size?: number,
  primary?: boolean,
  outline?: boolean,
  ghost?: boolean,
  children?: string
}
export const Button = ({ children, size, primary, outline, ghost, ...props }: ButtonProps) => {
  if (primary) {
    return <ButtonCore size={size} {...props} Component={ButtonStyled}>{children}</ButtonCore>
  }
  if (outline) {
    return <ButtonCore {...props} Component={ButtonOutline}>{children}</ButtonCore>
  }
  if (ghost) {
    return <ButtonCore size={size} {...props} Component={ButtonGhost}>{children}</ButtonCore>
  }
  return 'No primary button found'
}


