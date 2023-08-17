import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 10px;
        --white: #fff;
        --black: #000;
        --transparent: rgba(0,0,0,0)
        --blue-100: #35B0FC;
        --blue-200: #32A7F0;
        --blue-400: #2D95D6;
        --blue-500-default: #2A8ECC;
        --blue-900: #184E70;
        --green-100: #A0FC6A;
        --green-200: #98F065;
        --green-400: #88D65A;
        --green-600: #5E943E;
        --green-900: #47702F;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }


    button {
        background: transparent;
        cursor: pointer;
        transition: all .3s;
    }

    button, input {
        outline: 0;
        border: none;
    }

    h1, h2, h3, h4, h5, h6 {
        width: fit-content;
        display: inline-block;
    }

    a {
        text-decoration: none;
        color: var(--white);
    }
`;

export default GlobalStyle;
