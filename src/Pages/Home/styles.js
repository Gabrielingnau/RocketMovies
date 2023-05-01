import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  > div:nth-child(2) {
      
      display: grid;
      grid-template-rows: 50px;
      grid-template-areas: 
      "A B";

      grid-template-columns: 184px 207px;

      align-items: center;
      justify-content: space-between;

      padding: 0 123px;

      margin-top: 55px;

    > h1 {
        white-space: nowrap;

        font-weight: 400;
        font-size: 32px;
        line-height: 42px;

        color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  > main {
    width: auto;
    height: 100vh;
    padding-right: 8px;
    margin: 40px 123px 58px 123px;

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

    > a {
      width: 100%;
      padding: 32px;
      margin-Bottom: 40px;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      border-radius: 16px;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      > h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;

        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      .imagem {
        margin-top: 8px;
        display: flex;
        
        
        svg {
          font-size: 12px;
          margin-right: 6px;

          color: ${({ theme }) => theme.COLORS.ROSE};

        }
      }

      > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        margin: 15px 0;

        overflow: hidden;   


        color: ${({ theme }) => theme.COLORS.GRAY_300};
      }

      .Tag {
        display: flex;       
        align-items: center;
      }
    }

  }
`;
