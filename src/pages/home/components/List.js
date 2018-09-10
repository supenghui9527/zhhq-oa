import React,{ PureComponent } from 'react';
import { NoteList } from '../style';
import { connect } from 'react-redux';
class List extends PureComponent {
  render(){
    const { articleList } = this.props;
    return (
      <NoteList>
        {
          articleList.map(item=>(
            <li className="list-item" key={item.get('id')}>
              <a className="wrap-img" href="">
                <img src={item.get('imgUrl')} alt=""/>
              </a>
              <div className="content">
                <a className="title" href="">{item.get('title')}</a>
                <p className="desc">{item.get('desc')}</p>
                <div className="meta">
                  <a href="">{item.get('name')}</a>
                </div>
              </div>
            </li>
          ))
        }
      </NoteList>
    )
  }
}
const mapState = (state)=>{
  return {
    articleList:state.getIn(['home','articleList'])
  }
}
export default connect(mapState,null)(List);