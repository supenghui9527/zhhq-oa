import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';
import { actionCreators } from './store';
import Nav from './components/nav';
class Home extends Component {
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <Nav />
        </HomeLeft>
        <HomeRight>
        </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount (){
    this.props.changeHomeData();
  }
}
const mapDispatch = (dispatch) =>({
  changeHomeData (){
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
})
export default connect(null,mapDispatch)(Home);