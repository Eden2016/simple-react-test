const initialState = {
  humidity: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'HUMIDITY_CHANGED':
      return { humidity: action.payload };
    default:
      return state;
  }
};
