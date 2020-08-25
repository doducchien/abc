import * as contrain from '../constrains/const';
var isOpenCameraState = false;

var isOpenCameraReducer = (state = isOpenCameraState, action)=>{
    var copyState;
    switch(action.type){
        case contrain.openCamera: {
            copyState = true
            return copyState;

        }
        case contrain.closeCamera: {
            copyState = false
            return copyState;

        }
        default:{
            copyState = state
            return copyState;
        }
    }
}
export default isOpenCameraReducer;