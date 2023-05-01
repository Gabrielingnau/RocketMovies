import styled from "styled-components";

export const Container = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  padding: 5px 16px;
  border-radius: 8px;
  display: flex;
  margin-right: 8px;


  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BUTTON};
`;