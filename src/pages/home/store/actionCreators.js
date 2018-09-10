import axios from 'axios';
import * as actionTypes from './actionTypes';
import api from '../../../api'
const getHomeData = (result)=>({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList:result.topicList,
  articleList:result.articleList,
  recommendList:result.recommendList
})
export const getHomeInfo = ()=>{
  return async (dispatch)=>{
    try {
      const result = await axios.get(api.homeDataUrl);
      dispatch(getHomeData(result.data.data));
    } catch (err) {
      console.log(err);
    }
  }
}