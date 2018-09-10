import styled from 'styled-components';
import logoPic from '../../static/logo.png';
export const HeaderWrapper = styled.div `
  height:56px;
  position:relative;
  border-bottom:1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
  href: '/'
})`
  width:100px;
  height:56px;
  position:absolute;
  top:0;
  left:0;
  background-color:yellow;
  background:url(${logoPic}) no-repeat center center;
  background-size:100%;
`
export const Nav = styled.div `
  width:960px;
  height:100%;
  padding-right:70px;
  box-sizing:border-box;
  margin:0 auto;
`
export const NavItem = styled.div `
  line-height:56px;
  padding:0 15px;
  font-size:16px;
  color:#333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
`
export const SearchWrapper = styled.div `
  position:relative;
  float:left;
  .iconfont{
    width:30px;
    height:30px;
    line-height:30px;
    position:absolute;
    top:50%;
    text-align:center;
    right:5px;
    margin-top:-15px;
    border-radius:18px;
    z-index:66;
    &.focused{
      background-color:#777;
      color:#fff;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  padding: 0 40px 0 30px;
  width: 160px;
  height: 38px;
  margin:8px 0;
  font-size: 14px;
  margin-left:40px;
  box-sizing:border-box;
  outline:none;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  color:#333;
  &::placeholder{
    color:#999;
  }
  &.focused{
    width:240px;
  }
  &.slide-enter{
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
   width:240px;
  }
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    width:160px;
  }
`
export const SearchInfo = styled.div `
  position:absolute;
  width:240px;
  top:56px;
  padding:0 20px;
  box-shadow:0 0 8px rgba(0,0,0,.2);
  left:40px;
  z-index:66;
  background-color:#fff;
`
export const SearchInfoTitle = styled.div `
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;
`
export const SearchInfoSwitch = styled.span `
  float:right;
  font-size:12px;
  cursor: pointer;
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  cursor: pointer;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`
export const Addition = styled.div `
  position:absolute;
  float:right;
  top:0;
  right:0;
  height:56px;
`
export const Button = styled.a `
  float:right;
  line-height:38px;
  margin-top:9px;
  margin-right:20px;
  border-radius:19px;
  padding:0 20px;
  box-sizing:border-box;
  border:1px solid rgba(236,97,73,.7);
  font-size:14px;
  &::hover{
    background-color:rgba(236,97,73,.7);
  }
  &.reg{
    color:#ec6149;
  }
  &.writting{
    color:#ffff;
    background-color:#ec6149;
  }
`