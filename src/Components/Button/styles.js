import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ROSE};
  color: ${({ theme }) => theme.COLORS.BUTTON};

  height: 56px;
  border: 0;
  padding: 0 16px;

  border-radius: 10px;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    margin-left: 12px;
  }

  &:disabled {
    opacity: 0.5;
  }

`;