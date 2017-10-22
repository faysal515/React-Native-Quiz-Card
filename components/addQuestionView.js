import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';

import {saveDecks} from '../helpers'
class AddQuestionView extends Component {
  static navigationOptions = {
    headerTintColor: '#333333',
    headerStyle: {

    },
  };
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
    };
  }
  async submitHandler() {
    const { deckTitle } = this.props.navigation.state.params;
    const { question, answer } = this.state;
    this.props.addQuestion(deckTitle,{question,answer})
    await saveDecks(this.props.decks)
    this.setState({question:'', answer: ''})
    this.props.navigation.navigate('List');
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.labelText}>
          Question
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
        />
        <Text style={[styles.labelText, { marginTop: 10 }]}>
          Answer
        </Text>
        <TextInput
          style={[styles.textInput]}
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
        />
        <TouchableOpacity style={[styles.mainBtn, { marginTop: 100 }]} onPress={() => {this.submitHandler()}}>
          <Text style={{color: '#f7f7f7'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainBtn: {
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: '#333333',
  },
  textInput: {
    height: 40,
    width: 280,
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 3,
  },
  labelText: {
    fontSize: 26,
    fontWeight: '700',
  },
});

const mapStateToProps = (store, ownProps) => {
  return {
    decks: store.decks
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addQuestion: (deck,questionData) => dispatch({type: 'ADD_QUESTION', payload: {deck,questionData}})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddQuestionView);
