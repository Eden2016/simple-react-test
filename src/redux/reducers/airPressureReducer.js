const initialState = {
  airPressure: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AIR_PRESSURE_CHANGED':
      return { airPressure: action.payload };
    default:
      return state;
  }
};
