import styled from "styled-components";

export const SearchBoxContainer = styled.div`
  padding: 1rem;
  background-color: #fff159;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

export const NavBar = styled.div`
  display: flex;
  input[type=text], button {
    padding: 0.625rem 1.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  input[type=text]:focus {
    border: 1px solid #ccc;
  }
  form {
    margin-left: 1.875rem;
  }
`
