import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation'
import {Foundation} from '@expo/vector-icons';
import DeckList from './components/DeckList'
import AddDeck from './components/Add'
import DeckView from './components/DeckView'
import Quiz from './components/Quiz'
import AddQuestionView from './components/AddQuestionView'
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


export default Main