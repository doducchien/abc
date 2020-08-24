// var listMessState = JSON.parse(localStorage.getItem('listMess'));
var isOnlineState = [
    {id: 2},
    {id: 4},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 10},
    {id: 11},
    {id: 15},
    {id: 18},
    {id: 20},
   
];

const isOnlineReducer = (state = isOnlineState, action)=>{
    switch(action.type){
        case 0:{
            break;
        }
        default:{
            return [...state]
        }
    }
}
export default isOnlineReducer;