import React, { Component } from 'react';
import { Provider } from 'react-redux';

import MainScreen from './MainScreen';
import store from './redux/configureStore';

class App extends Component {
  constructor() {
    super();
    store.dispatch({ type: 'HUMIDITY_CHANGED', payload: 100 });
    store.dispatch({ type: 'TEMPERATURE_CHANGED', payload: 100 });
    store.dispatch({ type: 'AIR_PRESSURE_CHANGED', payload: 100 });
  }

  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
}

export default App;
