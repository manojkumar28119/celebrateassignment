import styled from "styled-components"

export const PageContainer = styled.div `
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:voilet;
    font-family:"Roboto";

    @media screen and (max-width:700px){
        flex-direction:column;
    }
`

export const Container = styled.div `
    border: 1px solid #d7dfe9;
    width: 50%;
    height: 80vh;
    margin-right:20px;
    display:flex;
    justify-content:center;
    align-items:center;

    @media screen and (max-width:700px){
        width:90%;
    }
`

export const Input = styled.input `
font-size:${props => props.fontSize}px;
 min-width:50px;
color: ${props => props.fontcolor};
border-style: dashed;
background-color:${props => props.bgcolor};
text-align:center;
font-family: ${props => props.fontStyle};
outline:none;
padding:2px;
`

export const AddedText = styled.p`
 font-size:${props => props.fontSize}px;
 color: ${props => props.fontcolor};
 background-color:${props => props.bgcolor};
 font-family: ${props => props.fontStyle};
 padding:0px;
 padding-left:3px;
 padding-right:3px;
`

export const Form = styled.form`
    display : flex;
    flex-direction:column;
    width:20%;
    padding:20px;
    height:60vh;

    @media screen and (max-width:700px){
        width:80%;
    }
 `

export const HeadingText  = styled.p`
    font-size:18px;
    margin-bottom:3px;
 `

 export const HeadingText1 = styled(HeadingText)`
    margin-bottom:5px
 `

export const SelectOptions = styled.select`
    padding:8px;
    width:100%;
    cursor:pointer;
`

export const Option = styled.option`
cursor:pointer;
padding:8px;
`

export const FontSizeCard = styled.div `
    display:flex;
    align-items : center;
    border:1px solid #1e293b;
    margin-right:5%;
    `

export const IconsContainer = styled.div`
    color:red;
    display:flex;
    align-items : center;
    flex-direction:column;
    
`

export const FontSizeText = styled.div `
    font-size:17px;
    margin-right:12px;
    margin-left:5px;
`

export const Button = styled.button `
    background-color:transparent;
    border:none;
    cursor:pointer;
`

export const InputColor = styled.input`
    height:45px;
    width:70px;
    padding:0px;
    cursor:pointer;
    border:none;

`
 

export const FontSizeAndInputCard = styled(FontSizeCard)`
    border:none;
    margin-right:0px;
    border :2px solid red
    align-items:center;
    margin:0px;
    justify-content:space-between;
`

export const ColorCard = styled.div`
    color:black;
    display:flex;
    flex-direction:column;
    align-self:flex-start;
`

export const AddText = styled(Button)`
    background-color:#0b69ff;
    padding:10px;
    color:#ffffff;
    border-radius:20px;
    margin-top:auto;

    @media screen and (max-width:700px){
        margin-top:20px;
    }
 `