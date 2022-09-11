import styled from "styled-components"

export const Friend = styled.li`
    padding: 0 10px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 14px;
    box-shadow: 0 1px 1px rgb(0 0 0 / 12%), 0 4px 4px rgb(0 0 0 / 6%), 1px 4px 6px rgb(0 0 0 / 16%);;
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