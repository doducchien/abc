// var listMessState = JSON.parse(localStorage.getItem('listMess'));
var friendState = [];

const friendReducer = (state = friendState, action)=>{
    switch(action.type){
        case 0:{
            break;
        }
        default:{
            return [...state]
        }
    }
}
export default friendReducer;