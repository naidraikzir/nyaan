import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { H1, View } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: 0,
      longitude: 0,
    };
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      loc => {
        this.setState({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
        });
      },
      err => console.error(err),
      {
        timeout: 10000,
        enableHighAccuracy: true,
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
      </View>
    );
  }
}

const styles = {
  container: { ...StyleSheet.absoluteFillObject },
  map: { ...StyleSheet.absoluteFillObject },
};
