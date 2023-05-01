import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    display: flex;
    align-items: center;

    padding: 0 124px;

    > a {
      color: ${({ theme }) => theme.COLORS.ROSE};
      display: flex;
      justify-content: center;
      align-items: center;

      > svg {
        color: ${({ theme }) => theme.COLORS.ROSE};
        margin-right: 8px;
        font-size: 16px;
      }
    }

  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;
> div:nth-child(2) {
    margin-bottom: 8px;
  }

> div:nth-child(4) {
  margin: 24px 0 8px 0;
}

> div:nth-child(5) {
  margin-bottom: 24px;
}
`;



export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;

  width: 186px;
  height: 186px;


  > img {
    width: 186px;
  height: 186px;

  border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background: ${({ theme }) => theme.COLORS.ROSE};
    border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 7px;
  right: 7px;

  > input {
    display: none;
  }

  > svg {
    width: 20px;
    height: 20px;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
  }
`;


