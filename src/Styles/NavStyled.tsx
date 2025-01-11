import styled from "styled-components";

export const NavbarBox = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    position:absolute;
    top: 5%;
    left: 20%;
    width: 60%;
    height: 3rem;
    gap: 1.5rem;
    background-color: transparent;
    & > div{
        display: flex;
        justify-content:center;
        align-items:center;
        width : 19%;
        height: 100%;
        background-color: blue;
        border-radius: 0.8rem;
        font-size: 1.5rem;
        &:hover{
            -webkit-box-shadow: 18px 24px 32px -4px rgba(145,77,88,0.82);
            -moz-box-shadow: 18px 24px 32px -4px rgba(145,77,88,0.82);
            box-shadow: 18px 24px 32px -4px rgba(145,77,88,0.82);
        }
    }
`