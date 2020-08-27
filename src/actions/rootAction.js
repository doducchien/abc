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

export const action_openAppointment = () =>{
    return{
        type: constrain.openAppointment
    }
}

export const action_closeAppointment = () =>{
    return{
        type: constrain.closeAppointment
    }
}
export const action_openMic = ()=>{
    return{
        type: constrain.openMic
    }
}
export const action_closeMic = ()=>{
    return{
        type: constrain.closeMic
    }
}
export const action_openEmoji = ()=>{
    return{
        type: constrain.openEmoji
    }
}
export const action_closeEmoji = ()=>{
    return{
        type: constrain.closeEmoji
    }
}

    