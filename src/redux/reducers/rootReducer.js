import { combineReducers } from 'redux';

import temperatureReducer from './temperatureReducer';
import airPressureReducer from './airPressureReducer';
import humidityReducer from './humidityReducer';

export default combineReducers({
  temperatureReducer,
  airPressureReducer,
  humidityReducer
});
