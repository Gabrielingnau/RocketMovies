import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Container = styled.header`
grid-area: header;

height: 116px;
width: 100%;

border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: ${({theme}) => theme.COLORS.BORDA};

display: flex;
align-items: center;
justify-content: space-between;

padding: 30px 123px;

> h1 {
    color: ${({ theme }) => theme.COLORS.ROSE};
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    margin-right: 64px;
}
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 30px;

 > img {
    weight: 56px;
    width: 56px;
    border-radius: 50%;
 } 

 > div {
    display: flex;
    flex-direction: column;
    margin-right: 9px;
    line-height: 24px;
    align-items: flex-end;
    margin-left: 64px;

   span {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    white-space: nowrap;
    }
   
   strong {
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    white-space: nowrap;
   } 

  }
  
`;