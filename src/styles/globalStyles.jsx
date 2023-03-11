import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Sofia Sans Semi Condensed', sans-serif;
    }

    /* background: ${theme.colors.light};
    color: ${theme.colors.white}; */

    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px ${theme.colors.light} inset;
    }
    
    input:-webkit-autofill {
        -webkit-text-fill-color: ${theme.colors.white} !important;
    }

    .btn-send {
        width: 80px;
        height: 30px;
        margin-top: 10px;
        border: none;
        font-size: 16px;
        font-weight: 800;
        cursor: pointer;
        background: ${theme.colors.veryLight};
        color: ${theme.colors.veryDark};

        &:hover {
            background: ${theme.colors.veryDark};
            color: ${theme.colors.veryLight};
        }
    }

    .container {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        background: ${theme.colors.dark};
        color: ${theme.colors.veryDark};

        .response-message {
            width: 100%;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            visibility: hidden;
        }

        .success-response {
            background: ${theme.colors.lightGreen};
            color: ${theme.colors.darkGreen};
        }

        .error-response {
            background: ${theme.colors.lightRed};
            color: ${theme.colors.darkRed};
        }
    }

    .nav-link {
        position: relative;
        text-decoration: none;
        color: ${theme.colors.veryLight};

        &:after {
            content: '';
            width: 100%;
            height: 2px;
            position: absolute;
            bottom: 0;
            left: 0;
            transition: all ease-in .2s;
            transform: scaleX(0);
            transform-origin: left;
            background: ${theme.colors.light};
        }

        &:hover:after {
            transform: scaleX(1);
        }
    }

    .container-home {
        width: 100%;
        padding: 40px 80px;
        text-align: center;

        > h1 {
            font-size: 50px;
            color: ${theme.colors.light};
        }

        > p {
            font-size: 20px;
            color: ${theme.colors.veryLight};
        }
    }

    .container-form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;

        .main {
            width: 400px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
        }

        .password-hidden {
            position: absolute;
            border-radius: 50%;
            cursor: pointer;
        }
    }

    .container-contacts {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 40px;
        font-weight: 800;
        color: ${theme.colors.white};

        .contacts {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .contact {
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        .contact-name {
            width: 80px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .contact-email {
            width: 150px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .btn-contact {
            width: 60px;
            border: none;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
        }

        .contact-update {
            background: ${theme.colors.white};
            color: ${theme.colors.veryDark};

            &:hover {
                background: ${theme.colors.veryDark};
                color: ${theme.colors.white};
            }
        }

        .contact-delete {
            background: ${theme.colors.red};
            color: ${theme.colors.white};

            &:hover {
                background: ${theme.colors.white};
            color: ${theme.colors.red};
            }
        }

        .new-contact {
            padding: 8px 16px;
            align-self: center;
            transition: all ease .3s;
            border: none;
            font-size: 1rem;
            background: ${theme.colors.veryDark};
            color: ${theme.colors.white};
            cursor: pointer;

            &:hover {
                background: ${theme.colors.white};
                color: ${theme.colors.veryDark};
            }
        }
    }
`;

export default GlobalStyle;