import React from 'react';
import { connect } from 'react-redux';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    font: 'Roboto',
    flexDirection: 'column'
  },
  item: {
    padding: 15
  }
};

class MainScreen extends React.PureComponent {
  render() {
    const { temperature, airPressure, humidity } = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.item}>{`Temperature: ${temperature}`}</div>
        <div style={styles.item}>{`Air pressure: ${airPressure}`}</div>
        <div style={styles.item}>{`Humidity: ${humidity}`}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  temperature: state.temperatureReducer.temperature,
  airPressure: state.airPressureReducer.airPressure,
  humidity: state.humidityReducer.humidity
});

export default connect(mapStateToProps)(MainScreen);
