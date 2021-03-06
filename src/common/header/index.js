import React,{ Component } from 'react';
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
class Header extends Component{
  getListArea(){
    const { focused,mouseIn,list,page,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page-1) * 10; i < page * 10; i++) {
        pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
      }
    }
    if(focused||mouseIn){
      return(
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage)}>换一批</SearchInfoSwitch>
            <SearchInfoList>
              { pageList }
            </SearchInfoList>
          </SearchInfoTitle>
        </SearchInfo>
      )
    }else{
      return null
    }
  }
  render(){
    const { focused,handleInputFocus,handleInputBlur } = this.props;
    return(
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={2000}
              classNames="slide"
            >
              <NavSearch 
                className={focused ? 'focused':''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused?'focused iconfont':'iconfont'}>&#xe64d;</i>
            {this.getListArea()}
          </SearchWrapper>
          <Addition>
            <Button className="writting">
            <i className="iconfont">&#xe708;</i>
            写文章
            </Button>
            <Button className="reg">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}
const mapStateToProps = (state)=>{
  return{
    focused:state.getIn(['header','focused']),
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    mouseIn: state.getIn(['header','mouseIn']),
    totalPage: state.getIn(['header','totalPage'])
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    handleInputFocus(){
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFouse());
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page,totalPage){
      page < totalPage?dispatch(actionCreators.changePage(page + 1)):dispatch(actionCreators.changePage(1));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);