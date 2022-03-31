import React from 'react';
import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from 'styled-components';

export default function ComponentesEstilizados(){
    let mainColor = '#db7093',
        mainAlphaColor80 = '#db709380';

    const setTransitionTime = (time) => `all ${time} ease-in-out`

    const fadeIn = keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `;

    const MyH3 = styled.h3`
    padding: 1.5rem;
    text-align: center;
    background: ${mainColor};
    transition: ${setTransitionTime('1.5s')};
    color: ${props => props.color};
    color: ${({ color }) => color};
    color: ${({ color }) => color || "#07b"};
    animation: ${fadeIn} 4s ease-out;

    ${({ isButton }) => isButton && css`
    margin: auto;
    max.width: 50%;
    border-radius: 0.25rem;
    cursor: pointer;
    `}

        &:hover {
            background: ${mainAlphaColor80}
    }
    `;

    const ligth = {
        color: "#222",
        bgColor: "#ddd"
    }
    const dark = {
        color: "#ddd",
        bgColor: "#222"
    }

    const Box = styled.div`
        padding: 1rem;
        margin: 1rem;
        color: ${({theme}) => theme.color};
        background-color: ${({theme}) => theme.bgColor};
    `;

    const BoxRounded = styled(Box)`
        border-radius: 1rem;
    `;

    const GlobalStyle = createGlobalStyle`
        h2 {
            padding: 2rem;
            background-color: #fff;
            color: #61dafb;
            text-transform: uppercase;
        }
    `;
    return(
        <>
        <GlobalStyle/>
            <h2>Styled Component</h2>
            <MyH3>Estoy estilizado con Styled Component</MyH3>
            <MyH3 color="#61dafb">
                Estoy estilizado con Styled Component
            </MyH3>
            <MyH3 isButton>Soy un h3 estilizado como botón</MyH3>
            <ThemeProvider theme={ligth}>
                <Box>Soy una caja ligth</Box>
                <BoxRounded>Soy una caja ligth y redondita</BoxRounded>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
                <Box>Soy una caja dark</Box>
                <BoxRounded>Soy una caja dark y redondita</BoxRounded>
            </ThemeProvider>
        </>
    )
}