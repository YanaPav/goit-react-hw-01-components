import styled from "styled-components"

export const StatSection = styled.section`
    width: 400px;
    background-color: white;
    
    .title {
        font-size: 18px;
        text-transform: uppercase;
        text-align: center;
    }
    .stat-list{
        display: flex;
        padding: 0;
        margin: 0;
    }
    .item {
        color: white;
        list-style: none;
        font-size: 20px;
        width: calc(100%/5);
        padding: 10px;
    }
    .label {
        display: block;
        text-align: center;
    }
    .percentage {
        margin-top: 10px;
        display: block;
        text-align: center;
    }
`