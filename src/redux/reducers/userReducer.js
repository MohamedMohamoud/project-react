import { SET_USER} from "../actions/actionTypes";
const initialstate ={
    user:null,
};
const userReducer = (state=initialstate,action)=>{
    switch(action.type){
        case SET_USER:
            return{
                ...state,
                user:action.user,
            };
            default:
                return state;
    }

};
export default userReducer;