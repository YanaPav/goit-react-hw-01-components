import styled from "styled-components"

export const User = styled.div`
    width: 400px;
    background-color: white;
    text-align: center;
    padding-top: 60px;

    .avatar {
        border-radius: 50%;
        width: 50%;
    }
    .name {
        font-weight: bold;
        font-size: 30px;
    }
    .tag, 
    .location {
        color: gray;
        font-size: 20px;
    }

    .stats {
        display: flex;
        background-color: #DFEDE8;
        padding: 0;

        li {
            list-style: none;
            width: calc(100%/3);
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border: 1px solid gray

        }

        .label {
            color: gray;
            font-size: 20px;
        }

        .quantity {
            font-size: 20px;
            font-weight: bold;
        }
    }
`