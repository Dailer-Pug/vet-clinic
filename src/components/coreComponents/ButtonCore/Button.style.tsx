import styled from 'styled-components'

export const ButtonStyled = styled.button<{ size: number, color: string }>`
    width: ${(props) => props.size}px;
    min-height: max-content;
    font-style:solid;
    color:white;
    border-style:solid;
    cursor:pointer;
    font-size: 16px;
    padding: 0px 13px;
      min-width: max-content;
  ${(props) => props.color === "blue" && `background-color:#6878D1; border-radius: 15px`}
  ${(props) => props.color === "green" && `color:#AEEDD0`}
  ${(props) => props.color === "pink" && `color:#EEAFBC`}
   `
export const ButtonOutline = styled(ButtonStyled)`
  display: flex;
  justify-content: center;
  background-color: white;
  border-style:solid;
  font-size: 16px;
  font-style:solid;
  cursor: pointer;
  min-height: min-content;
   width: ${(props) => props.size}px;
  min-width: max-content;
  border-radius:15px;
  padding: 0px 13px;
    ${(props) => props.color === "blue" && `backgroung-color:#6878D1;border: 2px solid #6878D1`}
  ${(props) => props.color === "green" && `color: #2CAE72 ; border: 2px solid #2CAE72;`}
  ${(props) => props.color === "pink" && `color:#EEAFBC ; border: 2px solid #EEAFBC `}
   `
export const ButtonGhost = styled(ButtonStyled)`
  display: inline-block;
  font-style:solid;
   font-weight: 300;
  letter-spacing: 1px;
  vertical-align: middle;
  border: 1px solid;
  box-sizing: border-box;
  min-height: min-content;
  width: ${(props) => props.size}px;
  min-width: max-content;
  color: white;
  border-radius:10px;
      padding: 0px 13px;
  ${(props) => props.color === "blue" && `backgroung-color:#6878D1`}
  ${(props) => props.color === "green" && `backgroung-color:#AEEDD0; color:black`}
  ${(props) => props.color === "pink" && `backgroung-color:#EEAFBC`}
` 
