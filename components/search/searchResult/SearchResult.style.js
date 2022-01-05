import styled from "styled-components";

export const SearchResultContainer = styled.ol`
    padding-left: 0;
    opacity: ${({searchLoading}) => searchLoading ? 0.2 : 1}};
`;
