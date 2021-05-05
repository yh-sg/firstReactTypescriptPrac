import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {  
        height: 100%;
    }

    *{
        font-family: 'Montserrat', sans-serif;
    }
`;

export const Wrapper = styled.div`
    h1{
        color: green;
    }

    p{
        color: crimson;
    }
`;   
