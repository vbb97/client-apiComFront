import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 100px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
    backdrop-filter: blur(5px);
`;

export const Title = styled.h2`
    align-self: center;
`;

export const Form = styled.form`
    width: 300px;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-radius: 4px;
    background: ${theme.colors.white};;
    color: ${theme.colors.veryDark};
`;

export const Data = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
    padding: 5px;
    outline: none;
`;

export const Error = styled.span`
    visibility: hidden;
    font-size: .9rem;
    color: ${theme.colors.red};
`;

export const Actions = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const Send = styled.input`
    width: 50%;
`;

export const Abort = styled.button`
    width: 50%;
`;