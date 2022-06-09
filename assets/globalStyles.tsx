import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Playfair+Display:wght@400;500;600;700&display=swap');

    * {
        box-sizing: border-box;
        font-family: ${({theme}) => theme.fontFamily.lato};
        margin: 0;
        padding: 0;
    }
  
    html,body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        overflow-x: hidden;
        font-size: 18px;
        background: ${({theme}) => theme.colors.background};  
        scroll-behavior: smooth;
    }
  
    a{
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    h1, h2, h3 {
        font-family: ${({theme}) => theme.fontFamily.playf}; 
    }

`

export default GlobalStyle