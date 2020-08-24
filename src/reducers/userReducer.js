import * as constrains from '../constrains/const'

// var userState = JSON.parse(localStorage.getItem('user'));
var userState = []
const userReducer = (state = userState, action)=>{
    switch(action.type){
        case constrains.login:{
            break;
        }
        case constrains.logOut:{
            break;
        }
        default:
            return 0
    }
}
export default userReducer;