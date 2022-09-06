import styled from "styled-components";

const theme = {
    fonts: {
        primary: "Quattrocento",
        secondary: "Quattrocento-Sans"
    }
};

export default theme;

export const Header = styled.h1`
    font-family: ${theme.fonts.primary};
    color: #222;
`

export const Body = styled.p`
    color: #111;
    font-family: ${theme.fonts.secondary};
    font-size: 1.05rem;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 700px;
`

export const Column = styled.div`
    flex-direction: column;
    margin-inline: 20px;
`