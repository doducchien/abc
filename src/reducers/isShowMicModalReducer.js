import * as constrain from '../constrains/const'

var isShowMicState = false;

const isShowMicReducer = (state = isShowMicState, action)=>{
    var copyState;
    switch(action.type){
        case constrain.openMic:{
             copyState = true;
            return copyState;
        }
        case constrain.closeMic:{
             copyState = false;
             return copyState
        }
        default:{
            copyState = state;
            return copyState;
        }
    }
}
export default isShowMicReducer;