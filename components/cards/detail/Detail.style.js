import styled from "styled-components";

export const ProductContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    background-color: #fff;
    list-style-type: none;
    padding: 2.5rem;
    border-bottom: solid 1px gray;
    border-bottom: thin solid #eee;
    height: auto;
    margin-bottom: 50px;
`

export const ImgContainer = styled.div`
    flex-grow: 1;
    width: 50%;
    padding: 10px 10px 10px 10px;
    img {
        /* height: 18rem;
        width: 18rem; */
        height: auto;
        width: 100%;
    }
`
export const InformationContainer = styled.div`
    margin-top: 1.25rem;
    align-items: stretch;
`
export const ButtonContainer = styled.div`
    margin-top: 20px;
    .button {
        background-color: #3483fa;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 8px;
    }
`
export const DescriptionTitle = styled.div`
    font-size: 1.25rem;
    margin-top: 1.25rem;
`
export const Description = styled.div`
    text-align: justify;
    text-justify: inter-word;
    padding-top: 1.25rem;
    color: #666;
`
export const Condition = styled.div`
    color: #666;
`
export const Title = styled.div`
    margin-top: 0.625rem;
    font-weight: bold;
`
export const Price = styled.div`
    font-size: 2rem;
    font-weight: bold;
    margin-top: 1.25rem;
`