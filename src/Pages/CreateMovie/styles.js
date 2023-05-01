import styled from "styled-components";

export const Container = styled.div`

> main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: auto;

    grid-area: content;

    height: 783px;
    padding-right: 8px;
    padding-right: 8px;
    margin: 40px 113px 0 113px;

    overflow-y: auto;

:-webkit-scrollbar-track {
background-color: transparent;
}
::-webkit-scrollbar {
width: 8px;
background: transparent;
}
::-webkit-scrollbar-thumb {
background-color: ${({ theme }) => theme.COLORS.ROSE};
border-radius: 8px;
}


  > .Header {

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

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
  
    > h1 {
      font-weight: 500;
      font-size: 36px;
      line-height: 47px;
  
      color: ${({ theme }) => theme.COLORS.WHITE};

      margin-top: 24px;
    }
  }
  

  .input {
    display: flex;
    width: 100%;
    margin: 40px 0;

    > div:first-child {
        margin-right: 40px;
    }
  }

  > .Container { 
    display: flex;
    flex-direction: column;
    width: 100%;

    margin: 40px 0;

    > h2 {
      font-weight: 400;
      font-size: 20px;
      line-height: 26px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};

      margin-bottom:24px;
    }

   > .Marcadores {
      display: flex;
      width: 100%;
      padding: 16px;
      border-radius: 8px;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }

  .Button {
    display: flex;

    width: 100%;
    > .First {
      width: 100%;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.ROSE};

      height: 56px;
      border: 0;
      padding: 0 16px;

      border-radius: 10px;
      font-weight: 500;

      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 40px;

       &:disabled {
         opacity: 0.5;
       }
    }
  }
}
`;