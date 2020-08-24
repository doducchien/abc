// var listMessState = JSON.parse(localStorage.getItem('listMess'));
var isBusyState = [];

const isBusyReducer = (state = isBusyState, action)=>{
    switch(action.type){
        case 0:{
            break;
        }
        default:{
            return [...state]
        }
    }
}
export default isBusyReducer;