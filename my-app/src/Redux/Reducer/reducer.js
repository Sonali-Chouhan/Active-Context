

const istate = {
    data:[]
}


const reducer = (state = istate, action) =>{
    console.log("action",action);
    switch(action.type){
        case"GET_DATA":
        return{
            ...state
        }
        break;
        default:
            return state
    }
}
export default reducer;