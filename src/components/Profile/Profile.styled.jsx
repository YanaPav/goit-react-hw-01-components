import styled from "styled-components"

export const User = styled.div`
    width: 400px;
    background-color: white;
    text-align: center;
    padding-top: 60px;`

export const Avatar = styled.img`
    border-radius: 50%;
    width: 50%;
`
        
export const Name = styled.p`
    font-weight: bold;
    font-size: 30px;
`
export const Tag = styled.p`
    color: gray;
    font-size: 20px;
`
export const Location = styled.p`
    color: gray;
    font-size: 20px;
`
    
export const Stats = styled.ul`
    display: flex;
    background-color: #DFEDE8;
    padding: 0;
    margin: 0;
`
export const StatsItem = styled.li`
    list-style: none;
    width: calc(100%/3);
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid gray;
`
export const Label = styled.span`
    color: gray;
    font-size: 20px;
`
export const Quantity = styled.span`
    font-size: 20px;
    font-weight: bold;
`   
