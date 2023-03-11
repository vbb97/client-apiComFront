import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    width: 100%;
    height: 90px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.veryDark};
    color: ${theme.colors.veryLight};
`;

export const Logo = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${theme.colors.light};
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
`;

export const LinksList = styled.ul`
    display: flex;
    gap: 10px;
`;

export const ItemList = styled.li`
    list-style: none;
    font-size: 18px;
    color: ${theme.colors.veryLight};
`;
