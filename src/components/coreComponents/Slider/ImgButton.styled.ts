import styled from "styled-components";


export const SlideButton = styled.button<{ position: string }>`
    position: absolute; 
    height: 45px;
    width:45px;
    border-radius: 25px; 
    border-style: none; 
    background-color:white;
    cursor:pointer;
    ${(props) => props.position === "left" && "top: 35%; left:0.01%; "}
    ${(props) => props.position === "right" && "top: 35%; right: 0.01%"}
`
