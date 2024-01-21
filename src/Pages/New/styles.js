import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";
  
  > main {
    grid-area: content;
    overflow-y: auto;

    margin: 46px 123px;
  }

  > main::-webkit-scrollbar {
    width: 8px;
  }

  > main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    padding: 16px 16px 8px;
    border-radius: 8px;
  }
`;

export const Form = styled.form`
  padding-right: 8px;

  > header {
    display: flex;
    flex-direction: column;

    margin-bottom: 40px;

    button {
      background: none;
			border: none;
    }

    h1 {
      font-weight: 500;
      font-size: 36px;
    }
  }

  > div {
    display: flex;
    gap: 40px;
  }
  
  textarea {
    margin-top: 32px;
  }
`;
