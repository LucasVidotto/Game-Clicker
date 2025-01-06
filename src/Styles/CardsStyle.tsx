import styled from "styled-components";

const BaseCard = styled.div`
    display:flex;
    width:60rem;
    height:36rem;
    border-radius:0.8rem;
`
export const CardBoxOne = styled(BaseCard)`
    background-color: rgb();
    backdrop-filter: blur(7px) saturate(0%);
    -webkit-backdrop-filter: blur(7px) saturate(0%);
    background-color: rgba(128, 0, 128, 0.3);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
`
export const CardBoxTow = styled(BaseCard)`
    backdrop-filter: blur(7px) saturate(0%);
    -webkit-backdrop-filter: blur(7px) saturate(0%);
    background-color: rgba(19, 219, 212, 0.3);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
`