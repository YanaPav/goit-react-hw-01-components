import styled from "styled-components"

export const Friend = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 14px;
`
export const Status = styled.span`
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${props => props.isOnline ? "green" : "red"};
`
export const Name = styled.p`
    font-size: 20px;
`
export const Friends = styled.ul`
    width: 390px;
    background-color: #fff;
    padding-left: 20px;
    padding-top: 20px;
    margin: 0;
`