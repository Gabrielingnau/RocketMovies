import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  > main {
      width: auto;
      height: 581px;
      margin: 40px 123px 0 123px;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

      display: flex;
      flex-direction: column;
      align-items: flex-start;

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

   > .Container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

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

       > .Header {
         display: flex;
         align-items: center;
         margin: 24px 0;
       
           > h1 {
            font-weight: 500;
            font-size: 36px;
            line-height: 47px;

             margin-right: 19px;
     
             color: ${({ theme }) => theme.COLORS.WHITE};
           }
   }    

      .imagem {
        margin-top: 8px;
        display: flex;
        
        
        svg {
          font-size: 20px;
          margin-right: 6px;

          color: ${({ theme }) => theme.COLORS.ROSE};

        }
      }

      > .foter {
        display: flex;
        align-items: center;

        > .h2 {
        display: flex;
        align-items: center;

        > img {
            border-radius: 50%;
            width: 16px;
            height: 16px;
        }
        > h2 {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;

            margin: 0 8px;
        }
        }
        
        > h2 {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            
            display: flex;
            align-items: center;
            
            > svg {
                font-size: 16px;
                margin-right: 8px;

                color: ${({ theme }) => theme.COLORS.ROSE};
            }
        }
    }
    
}
> .Tag {
  display: flex;       
  align-items: center;

  margin: 40px 0;
}
    > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        text-align: justify;
        margin-bottom: 32px;
    }

    }
`;