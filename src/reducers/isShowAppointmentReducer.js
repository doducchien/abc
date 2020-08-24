import * as constrain from '../constrains/const'
var isShowAppointment = false;

const showAppointmentReducer = (state = isShowAppointment, action)=>{
    switch(action.type){
        case constrain.openAppointment:{
            var copyState = state;
            copyState = true;
            return copyState;
        }
        case constrain.closeAppointment:{
            var copyState = state;
            copyState = false;
            return copyState;
        }
        default:{
            return {...state}
        }
    }
}
export default showAppointmentReducer;