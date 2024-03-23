import styled from "styled-components"

export const CardListContaienr = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem 2rem 1.5rem;
`

export const CardListTable = styled.table`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 700;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 0.75rem 1.5rem;
    background-color: ${(props) => props.theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  .brand {
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    font-size: 1rem;
  }
`
