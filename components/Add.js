import React from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux'
import {saveDeckTitle} from '../utils/helpers'

class AddDeck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  async submitHandler() {
    if(this.state.text.length === 0)
      return
    let newDeck = {
      title: this.state.text,
      questions: []
    }
    await saveDeckTitle(this.state.text)
    this.props.addDeck(newDeck)
    this.setState({text:''})
    this.props.navigation.navigate('DeckView', {...newDeck})
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.title}>What is the title of your new deck?</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <TouchableOpacity style={[styles.mainBtn, { marginTop: 20 }]} onPress={() => this.submitHandler()}>
            <Text style={{color: '#f7f7f7'}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 2,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#333333',
    fontWeight: '500',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    width: 280,
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 3,
  },
  mainBtn: {
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 40,
    backgroundColor: '#333333',
  },
});


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDeck: (deck) => dispatch({type: 'ADD_DECK', payload: deck})
  }
}


export default connect(null,mapDispatchToProps)(AddDeck)