const initialState = { name: '',
email: '', 
isLoggedIn: false,
};
const userReducer = (state = initialState, action) => {
switch (action.type) { case 'LOGIN':
return {
name: action.payload.name, email: action.payload.email, isLoggedIn: true,
};
case 'LOGOUT':
return initialState; default:
return state; }
};
export default userReducer;