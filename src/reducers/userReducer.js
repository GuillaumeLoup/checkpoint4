const initialState = {
  token: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_REGISTER': {
      return { ...action.user };
    }
    default:
      return state;
  }
};

export default userReducer;