import * as constrain from '../constrains/const'
var isShowEmojiState = false;

var isShowEmojiReducer = (state = isShowEmojiState, action) =>{
    var copyState = state;
    switch(action.type){
        case constrain.openEmoji: {
            copyState = true;
            return copyState;
        }
        case constrain.closeEmoji: {
            copyState = false;
            return copyState;
        }
        default:{
            return copyState;
        }
    }
    
}
export default isShowEmojiReducer;