import * as contrain from '../constrains/const';
var isOpenCameraState = false;

var isOpenCameraReducer = (state = isOpenCameraState, action)=>{
    switch(action.type){
        case contrain.openCamera: {
            var copyState = {...state};
            copyState = true;
            return copyState;

        }
        case contrain.closeCamera: {
            console.log('hihi')
            var copyState = {...state};
            copyState = false;
            return copyState;

        }
        default:{
            return {...state}
        }
    }
}
export default isOpenCameraReducer;