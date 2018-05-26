import React, { Component } from 'react';
import { H1, View } from 'native-base';
import { CameraKitCamera } from 'react-native-camera-kit';

export default class Camera extends Component {
  render() {
    return (
      // <View style={{ padding: 20 }}>
      //   <H1>Camera</H1>
      // </View>

      <CameraKitCamera
        ref={cam => this.camera = cam}
        style={{
          flex: 1,
          backgroundColor: 'white'
        }}
        cameraOptions={{
          flashMode: 'auto',             // on/off/auto(default)
          focusMode: 'on',               // off/on(default)
          zoomMode: 'on',                // off/on(default)
          ratioOverlay:'1:1',            // optional, ratio overlay on the camera and crop the image seamlessly
          ratioOverlayColor: '#00000077' // optional
        }}
        onReadQRCode={(event) => console.log(event.nativeEvent.qrcodeStringValue)} // optional
      />
    );
  }
}
