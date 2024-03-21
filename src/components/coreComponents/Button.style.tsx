import styled, { css } from 'styled-components'

export const ButtonStyled = styled.button<{ size: number }>`
    width: ${(props) => props.size}px;
    min-height: max-content;
   `
export const ButtonOutline = styled(ButtonStyled)`
  display: flex;
  justify-content: center;
   border: 2px solid black;
  background-color: white;
  color: black;
  font-size: 16px;
  cursor: pointer;
  min-height: min-content;
   width: ${(props) => props.size}px;
  min-width: max-content;
   `
// Сделай высоту и ширину относительно текста внутри
export const ButtonGhost = styled(ButtonStyled)`
  display: inline-block;
   font-weight: 300;
  letter-spacing: 1px;
  vertical-align: middle;
  border: 1px solid;
  box-sizing: border-box;
  min-height: min-content;
  width: ${(props) => props.size}px;
  min-width: max-content;
` 
