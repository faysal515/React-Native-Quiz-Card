import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation'
import {Foundation} from '@expo/vector-icons';
import DeckList from './components/deckList'
import AddDeck from './components/add'
import DeckView from './components/deckView'
import Quiz from './components/quiz'
import AddQuestionView from './components/addQuestionView'
import store from './store'
import {Provider} from 'react-redux'


const Tabs = TabNavigator({
  List: {
    screen: DeckList
  },
  Add: {
    screen: AddDeck
  }
})

const Main = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title}`,
    }),
  },
  AddQuestion: {
    screen: AddQuestionView,
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({navigation}) => ({
      title: `quiz on ${navigation.state.params.title}`,
    }),
    header: ({ goBack }) => ({
      right: <Foundation name="folder" size={25} color={tintColor}/>
    })
  }
})
export default class App extends React.Component {
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
