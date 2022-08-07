
const initState = {
    users: [
        {id:1, name: 'taint'},
        {id:2, name: 'it'}
    ]
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id);
            state.users = users
            return {
                ...state, users
            };
        case 'CREATE_USER':
            console.log(">>> check create user",action)
            let id = Math.floor(Math.random() * 1000);
            let user = {id:id, name:`user - ${id}`}
            return{
                ...state, users: [...state.users,user]
            }
        default:
            return state;
      }
}

export default rootReducer;