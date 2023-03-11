import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    width: 100%;
    height: 46px;
`;

export const Name = styled.span`
    color: ${theme.colors.white};
`;

export const Box = styled.div`
    width: 100%;
    height: 25px;
    padding: 8px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: end;
    background: ${theme.colors.light};
`;

export const Data = styled.input`
    width: 100%;
    height: 25px;
    border: none;
    font-size: 16px;
    background: ${theme.colors.light};
    color: ${theme.colors.white};
    &:focus {
        outline: none;
    }
`;

export const Error = styled.span`
    visibility: hidden;
    color: ${theme.colors.lightRed};
`;