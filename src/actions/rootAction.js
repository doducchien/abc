import * as constrain from '../constrains/const'

export const action_toggleInfo = () =>{
    return{
        type: constrain.toggleInfo
    }
}
export const action_openCamera = () =>{
    return{
        type: constrain.openCamera
    }
}
export const action_closeCamera = () =>{
    return{
        type: constrain.closeCamera
    }
}