import * as constrain from '../constrains/const'
var isShowAppointment = false;

var showAppointmentReducer = (state = isShowAppointment, action)=>{
    var copyState;
    switch(action.type){
        case constrain.openAppointment:{
            copyState = true;
            return copyState;
        }
        case constrain.closeAppointment:{
            copyState = false;
            return copyState;
        }
        default:{
            copyState = state;
            return copyState;
        }
    }
}
export default showAppointmentReducer;