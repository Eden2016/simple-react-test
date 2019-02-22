const initialState = {
  temperature: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TEMPERATURE_CHANGED':
      return { temperature: action.payload };
    default:
      return state;
  }
};
