const INITAL_STATE = {
  currentUser: null
}

const userReducer = (currentState = INITAL_STATE, action) => {
  if(action.type === 'SET_CURRENT_USER'){
    return {
      ...currentState,
      currentUser: action.payload
    }
  }else{
    return currentState;
  }
}

export default userReducer;