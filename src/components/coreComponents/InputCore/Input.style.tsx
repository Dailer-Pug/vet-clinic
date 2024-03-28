import styled from "styled-components";


export const InputStyled = styled.input<{ size?: number }>`
  min-width: max-content;
  min-height: max-content;
`
export const InputGhost = styled(InputStyled)`
  outline: none;
  border: inherit;
  border-radius: 0.5rem;
  color:black;
`
