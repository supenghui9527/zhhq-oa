import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width:100%;
  height:100%;
  overflow:hidden;
`;
export const HomeLeft = styled.div`
  width:180px;
  height:100%;
  padding:6px 0 6px 6px;
`
export const HomeRight = styled.div`

`
export const NavWrapper = styled.div`
  width:100%;
  height:100%;
  background-color:rgba(59,59,59,0.9);
  border-radius:4px;
`
export const NavItem = styled.div`
  width:100%;
  height:40px;
  line-height:40px;
  text-align:center;
  &.active{
    background-color:#fff;
  }
`