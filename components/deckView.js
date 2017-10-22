import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class DeckView extends Component {
  static navigationOptions = {
    headerTintColor: '#333333',
  };
  render() {
    const navigation = this.props.navigation;
    const { title, imageSource, questions } = this.props.navigation.state.params;
    return (
      <View style={{flex: 1}}>
        <View style={styles.DeckHeader}>
          <Image source={imageSource} style={{width: 130, height: 130}} />
          <Text style={[styles.title, { marginTop: 10 }]}>{title}</Text>
          <Text style={{fontSize: 20, color: '#333333'}}>{`${questions.length} cards`}</Text>
        </View>
        <View style={styles.DeckBtns}>
          {questions.length !== 0 &&
          <TouchableOpacity style={styles.mainBtn} onPress={() => navigation.navigate('QuizView', { questions, totalNumber: questions.length, score: 0 })}>
            <Text style={{color: '#f7f7f7'}}>Start Quiz</Text>
          </TouchableOpacity>
          }
          <TouchableOpacity style={[styles.secondaryBtn, { marginTop: 10 }]}
                            onPress={() => navigation.navigate('AddQuestion', { deckTitle: title })}>
            <Text style={{color: '#333333'}}>Add Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  DeckHeader: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  DeckBtns: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 27,
    fontWeight: '600',
    color: '#333333',
  },
  mainBtn: {
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: '#333333',
  },
  secondaryBtn: {
    borderRadius: 4,
    paddingVertical: 11,
    paddingHorizontal: 39,
    borderWidth: 1,
    borderColor: '#333333',
  },
});
