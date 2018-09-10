import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  NavWrapper,
  NavItem
} from '../style';
class Nav extends PureComponent {
  render(){
    const { list } = this.props;
    return (
      <NavWrapper>
        {
          list.map(item=>
            (
              <NavItem key={item.get('id')}>
                <img
                  className="topic-pic"
                  src={item.get('imgUrl')}
                  alt={item.get('title')}
                />
                {item.get('title')}
              </NavItem>
            )
          )   
        }
      </NavWrapper>
    )
  }
}
const mapStateToProps = (state)=>{
  return{
    list:state.getIn(['home','topicList'])
  }
}
export default connect(mapStateToProps, null)(Nav);