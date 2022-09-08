import styled from "styled-components"

export const User = styled.div`
    width: 800px;
    background-color: white;
    text-align: center;
    padding-top: 60px;

    .avatar {
        border-radius: 50%;
        width: 50%;
    }
    .name {
        font-weight: bold;
        font-size: 50px;
    }
    .tag, 
    .location {
        color: gray;
    }

    .stats {
        display: flex;
        background-color: #DFEDE8;
        padding: 0;

        li {
            list-style: none;
            width: calc(100%/3);
            height: 140px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border: 1px solid gray

        }

        .label {
            color: gray;
            font-size: 30px;
        }

        .quantity {
            font-size: 30px;
            font-weight: bold;
        }
    }
`