import styled from "styled-components"

export const Container = styled.div`
  width: 99%;
  display: flex;
  justify-content: center;

  .gridContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    width: 99vw;
    max-width: 1440px;
    gap: 2rem;

  }
`

export const ProductContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme["gray-600"]};
  color: ${(props) => props.theme["gray-200"]};
  height: 160px;
  width: 440px;

  border-radius: 8px;
`
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 160px;
  img {
    height: 140px;
    width: 140px;

    border-radius: 4px;
    background-color: ${(props) => props.theme.white};
  }
`

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  justify-content: center;
  gap: 1rem;
  margin: 0.5rem;

  .descriptionContainer {
    min-height: 3rem;
    padding-top: 0.5rem;
    border-top: 1px solid ${(props) => props.theme["gray-300"]};
    border-bottom: 1px solid ${(props) => props.theme["gray-300"]};
  }

  .buttonContentContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-weight: 700;
    }
  }

  .buttonContent {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 38px;
      height:24px;
      border-radius: 4px;
      background-color: ${(props) => props.theme["gray-100"]};
      cursor: pointer;
    }
  }
`

  /* @media all and (max-width: 510px) {
    .gridContainer {
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
    .productContainer {
      height: 280px;
      width: 170px;
      margin-left: auto;
      margin-right: auto;
    }

    .productContent {
      width: 170px;
      height: 260px;
    }

    .name {
      font-size: 0.8rem;
      min-height: 3.5rem;
      padding: 0.2rem;
      text-align: center;
    }

    .code {
      font-size: 0.7rem;
      margin-top: 0.5rem;
    }

    .logo {
      font-weight: 500;
    }

    img {
      height: 3.7rem;
      width: 3.7rem;
    }

    .price {
      color: #5a5a5a;
      font-size: 1.5rem;
      margin-bottom: 0.3rem;
    }

    section {
      display: flex;
      flex-direction: column;

      .cardButton {
        font-weight: 500;
        border: none;
        height: 1.8rem;
        width: 6rem;
        border-radius: 0.3rem;
        font-size: 0.7rem;

        & + button {
          margin-left: 0;
          margin-top: 0.5rem;
        }
      }

      #add {
        background: #00b945;
        color: #fff;

        &:hover {
          background: #00792d;
        }
      }

      #verify {
        background: #00a5b9;
        color: #fff;

        &:hover {
          background: #006a77;
        }
      }
    }
  }
` */
