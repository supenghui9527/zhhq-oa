import styled from 'styled-components';
export const LoginWrapper = styled.div`
  width:100%;
  height:100%;
  overflow:hidden;
  background-color:#f0f0f0;
`
export const LoginHeader = styled.div`
  width:100%;
  height:70px;
  line-height:70px;
  padding:0 150px;
  box-sizing:border-box;
  overflow:hidden;
  background-color:#fff;
  a{
    color:blue;
    text-decoration:none;
  }
  span{
    float:right;
  }
`
export const LoginContainer = styled.div`
  width:100%;
  position:absolute;
  top:70px;
  bottom:70px;
  background-color:green;
`
export const LoginUser = styled.div`
  width:300px;
  height:300px;
  padding:0 25px;
  box-sizing:border-box;
  position:absolute;
  right:130px;
  top:50%;
  margin-top:-150px;
  background-color:#f0f0f0;
  .input{
    width:250px;
    height:36px;
    padding-left:80px;
    box-sizing:border-box;
    border:1px solid #c4c4c4;
    &::placeholder{
      color:#999;
    }
  }
  .button{
    width:100%;
  }
`
export const LoginName = styled.input.attrs({
  placeholder:'请输入账号'
})`
  margin:40px 0 20px 0;
`
export const LoginPassword = styled.input.attrs({
  placeholder:'请输入密码'
})`
`
export const PasswordPanel = styled.div`
  width:100%;
  height:30px;
  line-height:30px;
  font-size:12px;
  a{
    float:right;
    text-decoration:none;
  }
`
export const PasswordRemember = styled.div`
  height:30px;
  width:50%;
  float:left;
  input{
    width:16px;
    height:16px;
    margin:0;
    vertical-align:middle;  
  }
  label{
    display:inline-block;
    padding-left:10px;
    color:#444;
    font-size:12px;
  }
`
export const LoginButton = styled.div`
  width:100%;
  height:40px;
  line-height:40px;
  text-align:center;
  font-size:16px;
  background-color:blue;
`
export const LoginFooter = styled.div`
  width:100%;
  height:70px;
  line-height:70px;
  background-color:#f0f0f0;
`