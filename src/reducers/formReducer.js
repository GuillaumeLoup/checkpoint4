const initialState = {
  show: {},
};

const show = (state = initialState, action) => {
  switch (action.type) {
    
    case 'FETCH_SUCCESS_SHOW': {
      return {
        show: { ...action.show },
      };
    }
    case 'FETCH_DELETE_SHOW': {
      return {
        show: { ...action.show },
      };
    }
    default:
      return state;
  }
};


export default show;
