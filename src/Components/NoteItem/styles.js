import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "trasparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme}) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}`: "none"};

  margin-right: 24px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.ROSE};
  }
  .button-add {
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  >input {
    height: 56px;
    width: 100%;

    padding: 12px;

    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;