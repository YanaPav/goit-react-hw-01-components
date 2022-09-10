import styled from "styled-components"

export const StatSection = styled.section`
    width: 400px;
    background-color: white;
`
export const Title = styled.h2`
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
`
    
export const StatList = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
`
export const StatItem = styled.li`
    color: white;
    list-style: none;
    font-size: 20px;
    width: calc(100%/5);
    padding: 10px;
`
export const Label = styled.span`
    display: block;
    text-align: center;  
`  
export const Percentage = styled.span`
    margin-top: 10px;
    display: block;
    text-align: center;
`