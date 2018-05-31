import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

export default class AppFooter extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Footer>
          <FooterTab>
            <Button
              active={this.props.navigation.state.index === 0}
              onPress={() => this.props.navigation.navigate('HomePage')}
            >
              <Icon name="apps" />
            </Button>
            <Button
              active={this.props.navigation.state.index === 1}
              onPress={() => this.props.navigation.navigate('CameraPage')}
            >
              <Icon name="camera" />
            </Button>
            <Button
              active={this.props.navigation.state.index === 2}
              onPress={() => this.props.navigation.navigate('MapPage')}
            >
              <Icon name="compass" />
            </Button>
            <Button
              active={this.props.navigation.state.index === 3}
              onPress={() => this.props.navigation.navigate('ProfilePage')}
            >
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </StyleProvider>
    );
  }
}
