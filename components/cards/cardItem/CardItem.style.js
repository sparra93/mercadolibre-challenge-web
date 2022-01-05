import styled from "styled-components";

export const Items = styled.li`
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    background-color: #fff;
    list-style-type: none;
    padding: 2.5rem;
    border-bottom: solid 1px gray;
    border-bottom: thin solid #eee;
`

export const ImgContainer = styled.span`
    img {
        height: 8rem;
        width: 8rem;
    }
`
export const Information = styled.span`
    margin-left: 1.25rem;
    .price {
        font-size: 1.25rem;
        margin-bottom: 0.625rem;
    }
    .title {
        font-size: 0.875;
    }
`