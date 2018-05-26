import React, { Component } from 'react';
import { H1, H3, Text, View } from 'native-base';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
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
      <View style={{ padding: 20 }}>
        <H1>Home</H1>
        <View style={{ marginTop: 20 }}>
          <H3>Position</H3>
          <Text>Latitude: {this.state.latitude}</Text>
          <Text>Longitude: {this.state.longitude}</Text>
        </View>
      </View>
    );
  }
}
