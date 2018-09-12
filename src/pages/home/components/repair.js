import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
class repair extends PureComponent {
  render(){
    const { articleList } = this.props;
    return (
      <div>dsds </div>
    )
  }
}
const mapState = (state)=>{
  return {
    articleList:state.getIn(['home','articleList'])
  }
}
export default connect(mapState,null)(repair);