import styled from "styled-components"

export const HomeContaienr = styled.div`
  display: flex;
  margin-top: 4rem;
  gap: 2rem;
  justify-content: center;

  .link {
    background-color: ${(props) => props.theme["gray-800"]};
    color: ${(props) => props.theme.white};
    font-size: 1.5rem;
    height: 3rem;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    text-decoration: none;
  }
`
