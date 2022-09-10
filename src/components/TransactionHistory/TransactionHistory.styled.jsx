import styled from "styled-components"

export const Table = styled.table`
    font-size: 15px;
    background-color: white;
`
export const TableHeader = styled.thead`
    color: white;
    background-color: #3db9d9;

    tr {
        padding: 10px 0;
    }

    th {
        padding: 10px 0;
        width: calc(390px/3);
        text-transform: uppercase;
    }
`
export const TableBody = styled.tbody`
    text-align: center;
    color: gray;    
    
`
export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #cadade;        
    }

    td {
        padding: 5px 0;
    }  
`