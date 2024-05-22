import styled from "styled-components";

export const ImgCicrle = styled.button<{ target: boolean }>`
    border-radius: 100%;
    border-style: solid;
    width: 5px;
    height: 11px;
    background-color: white;
    cursor: pointer;
    margin-left: 1px;
    &:hover{
        border-color:gray;
    }
    ${(props) => props.target === true && `
    border-radius: 100%;
    border-color:#7575ff;
    background-color:#7575ff;
    `
    }
`

export const SlideButton = styled.button<{ position: string }>`
    position: absolute; 
    height: 45px;
    width:45px;
    border-radius: 25px; 
    border-style: none; 
    background-color:white;
    cursor:pointer;
       ${(props) => props.position ===
        "left" && "transform: translateY(-50%); top: 50%;left: 0%; "}
    ${(props) => props.position ===
        "right" && "transform: translateY(-50%); top: 50%; right: 0%; "}
`

export const Wrapper = styled.div`
    position:relative; 
    display: flex;
    width: 100%;
    height:100%;
    justify-content:center; object-fit: cover;
    padding:20px; 
    box-sizing: border-box;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; 
`
