import React, { Component } from 'react';
import { Button, H1, Icon, View } from 'native-base';
import { CameraKitCamera } from 'react-native-camera-kit';

export default class Camera extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
      }}>
        <CameraKitCamera
          ref={cam => (this.camera = cam)}
          style={{
            flex: 1,
            backgroundColor: 'white',
          }}
          cameraOptions={{
            flashMode: 'auto', // on/off/auto(default)
            focusMode: 'on', // off/on(default)
            zoomMode: 'on', // off/on(default)
            ratioOverlay: '1:1', // optional, ratio overlay on the camera and crop the image seamlessly
            ratioOverlayColor: '#00000077', // optional
          }}
          onReadQRCode={event => console.log(event.nativeEvent.qrcodeStringValue)} // optional
        />
        <View style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          backgroundColor: '#000',
          paddingTop: 15,
          paddingBottom: 15,
        }}>
          <Button dark style={{ alignSelf: 'center' }}>
            <Icon name="md-image" />
          </Button>
          <Button
            rounded
            light
            style={{
              height: 60,
              width: 60,
              backgroundColor: '#fff',
            }}
          />
          <Button dark style={{ alignSelf: 'center' }}>
            <Icon name="sync" />
          </Button>
        </View>
      </View>
    );
  }
}
