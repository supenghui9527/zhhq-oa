import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import {RecommendList} from '../style';
class Recommend extends PureComponent {
  render(){
    const { recommendList } = this.props;
    return (
      <RecommendList>
        {
          recommendList.map(item=>{
            return(
              <a href={item.get('targetUrl')} key={item.get('id')}>
                <img src={item.get('imgUrl')} alt=""/>
              </a>
            )
          })
        }
      </RecommendList>
    )
  }
}
const mapState = (state)=>{
  return {
    recommendList:state.getIn(['home','recommendList'])
  }
}
export default connect(mapState,null)(Recommend);