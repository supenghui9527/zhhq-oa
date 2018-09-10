import React,{ Component } from 'react';
import Footer from '../../common/footer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
  LoginWrapper,
  LoginHeader,
  LoginContainer,
  LoginUser,
  LoginName,
  LoginPassword,
  PasswordPanel,
  PasswordRemember
} from './style';
import {
  Button
} from 'antd';
class Login extends Component {
  render(){
    const { handleClickLogin, history } = this.props;
    return(
      <LoginWrapper>
        <LoginHeader>
          <a href="">建邺智慧后勤</a>
          <span>欢迎使用！</span>
        </LoginHeader>
        <LoginContainer>
          <LoginUser>
            <LoginName className="input"/>
            <LoginPassword className="input"/>
            <PasswordPanel>
              <PasswordRemember>
                <input id="remmber" type="checkbox"/>
                <label htmlFor="remmber">记住密码</label>
              </PasswordRemember>
              <Link to="/home">忘记密码></Link>
            </PasswordPanel>
            <Button block={true} type="primary" onClick={()=>{handleClickLogin(history)}} size="large">登录</Button>
          </LoginUser>
        </LoginContainer>
        <Footer/>
      </LoginWrapper>
    )
  }
}
const mapDispatch = (dispatch)=>({
  handleClickLogin(history){
    history.push('/home')
  }
})
export default connect(null,mapDispatch)(Login);