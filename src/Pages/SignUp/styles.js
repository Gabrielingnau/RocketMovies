import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 150px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;

  > div:nth-child(2) {
      margin-bottom: 8px;
    }
  > div:nth-child(3) {
      margin-bottom: 8px;
    }
  > div:nth-child(4) {
      margin-bottom: 24px;
    }

    > a {
      margin-top: 42px;
      color: ${({ theme }) => theme.COLORS.ROSE};
      display: flex;
      justify-content: center;
      align-items: center;

      > svg {
        color: ${({ theme }) => theme.COLORS.ROSE};
        margin-right: 8px;
      }
    }
`;

export const Background = styled.div`
 flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.3;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

`;