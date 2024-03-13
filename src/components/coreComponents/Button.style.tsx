import styled, { css } from 'styled-components'

export const ButtonStyled = styled.button<{ size: number }>`

    width: ${(props) => props.size}px;
    height: 20px
   `
export const ButtonOutline = styled(ButtonStyled)`
  display: flex;
  align-items: center;
  justify-content: center;
   border: 2px solid black;
  background-color: white;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  height: 20px;
   width: ${(props) => props.size}px;
   `
export const ButtonGhost = styled(ButtonStyled)`
margin-right: 1em;
  margin-bottom: 1em;
  display: inline-block;
  outline: none;
  *zoom: 1;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: 300;
  letter-spacing: 1px;
  vertical-align: middle;
  border: 1px solid;
  transition: all 0.2s ease;
  box-sizing: border-box;
  text-shadow: 0 1px 0 rgba(0,0,0,0.01);

` 
