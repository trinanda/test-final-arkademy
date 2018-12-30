import React, { Component} from 'react';
import { Button, View, Text } from 'react-native';

export default class Home extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Products"
            onPress={() => this.props.navigation.navigate('Products')}
          />
        </View>
      );
    }
  }