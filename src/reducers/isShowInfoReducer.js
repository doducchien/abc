// var listMessState = JSON.parse(localStorage.getItem('listMess'));
import * as contrain from '../constrains/const';
// import * as action from '../actions/rootAction'
var isShowInfoState = {
        isShowAllInfo: false,
        isShowRank: true,
		isShowMedia: true,
		isShowFile: true,
		isShowLink: true,
};

const isShowInfoReducer = (state = isShowInfoState, action)=>{
    switch(action.type){
        case contrain.toggleInfo:{
            var stateCopy = {...state};
            stateCopy.isShowAllInfo = !stateCopy.isShowAllInfo;
            return stateCopy;
        }
        default:{
            
            return {...state}
        }
    }
}
export default isShowInfoReducer;

