import styled from "styled-components"

export const ProductContainer = styled.div`
  padding: 3rem 5rem;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 1rem;

  .description {
    display: flex;
    justify-content: space-around;
    max-height: 500px;
  }

  section {
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      font-size: 2rem;
      font-weight: 700;
      padding: 1rem 0;

      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .version {
        font-size: 1rem;
      }
    }

    .codeContainer {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 6rem;
    }

    .codeContainer::before,
    .codeContainer::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      height: 1px;
      background-color: ${(props) => props.theme["gray-300"]};
    }

    .codeContainer::before {
      top: 0;
    }

    .codeContainer::after {
      bottom: 0;
    }

    .productModel {
      max-height: 220px;
      min-height: 220px;
      overflow: auto;
    }

    h3 {
      padding-bottom: 1rem;
    }
  }

  .ImageContainer {
    height: 400px;
    width: 450px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme.white};
    border-radius: 0.5rem;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
`
