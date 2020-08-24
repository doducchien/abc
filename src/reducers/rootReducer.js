import {combineReducers} from 'redux'

import userReducer from './userReducer'
import listMessReducer from './listMessReducer';
import contentMessReducer from './contentMessReducer';
import friendReducer from './friendReducer';
import isOnlineReducer from './isOnlineReducer';
import isOpenCameraReducer from './isOpenCameraReducer'

import isShowInfoReducer from './isShowInfoReducer';
import showAppointmentReducer from './showAppointmentReducer';

const rootReducer = combineReducers({
    user: userReducer,
    listMess: listMessReducer,
    contentMess:contentMessReducer,
    friend: friendReducer,
    isOnline: isOnlineReducer,
    isShowInfo: isShowInfoReducer,
    isOpenCamera: isOpenCameraReducer,
    isshowAppointment: showAppointmentReducer
});
export default rootReducer;