import styled from "styled-components"

export const HeaderContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 0.5rem;
  position: sticky;
  top: 0;
  color: ${(props) => props.theme.white};
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme["gray-900"]};

  border-bottom: 1px solid ${(props) => props.theme["gray-500"]};
`

export const HeaderContent = styled.div`
  position: relative;
  width: 100vw;
  max-width: 1180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1.5rem;

  @media (max-width: 768px) {
    max-width: 730px;
  }
`

export const LogoContainer = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  display: flex;
`

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 30rem;
    height: 3rem;
    border: 2px solid ${(props) => props.theme["gray-800"]};
    color: ${(props) => props.theme["gray-300"]};
    padding-left: 1rem;
    background-color: transparent;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    border-right: none;
  }

  input:focus {
    border: 1px solid ${(props) => props.theme["gray-500"]};
    outline: none;
  }

  button {
    height: 3rem;
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme["gray-800"]};
    border: 2px solid ${(props) => props.theme["gray-800"]};
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;

    cursor: pointer;
  }

  @media (max-width: 768px) {
    input {
      width: 25rem;
    }
  }
`

export const CartContainer = styled.div`
  padding-top: 8px;
`
