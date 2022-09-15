import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  border: "#000",
  top: 'lightgrey',
  job: 'blue',
};

export const darkTheme = {
  body: "#000",
  fontColor: "#87CEEB",
  border: "#87CEEB",
  top: '#fff',
  job: 'blue',
};

export const GlobalStyles = createGlobalStyle`

    body{
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
    }
    
    button{
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
    }
    
    a:visited{
        color: ${(props) => props.theme.fontColor};
    }

    a{
        color: ${(props) => props.theme.fontColor};
    }
    
    .Top{
        background-color: ${(props) => props.theme.top};
        border: solid ${(props) => props.theme.border};
    }`;