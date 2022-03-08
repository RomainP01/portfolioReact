import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box
}

html{
    @media (max-width: 1700px){
        font-size:75%
    }
  
}
body{
    background:#1b1b1b;
    overflow-x: hidden
}
button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #9198e5;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background-color: #9198e5;
        color: white;
    }
    
}
h2{
    font-weight: lighter;
    font-size: 4rem;
}
h3{
color: white;
}
h4{
    font-weight: bold; 
    font-size: 2rem;
}
span{
    font-weight: bold; 
    color: #9198e5
}
a{
    font-size: 1.1rem
}
p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%
}

input{
    height:30px
}
`

export default GlobalStyle
