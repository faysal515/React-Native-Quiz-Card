import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation'
import Main from './router'
import {setLocalNotification} from './utils/notifications'
import store from './store'
import {Provider} from 'react-redux'



export default class App extends React.Component {
  async componentDidMount() {
     await setLocalNotification()
  }
  render() {
    console.log('store ', store.getState())
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
