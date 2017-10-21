import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {connect} from 'react-redux'
import {getDecks} from "../helpers";
import Deck from './deck'

class DeckList extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     decks: []
  //   }
  // }
  async componentWillMount() {
    let decks = JSON.parse(await getDecks())
    this.props.getDecks(decks)
  }

  renderDeckList() {
    let {decks} = this.props
    if (!decks)
      return <Text>No Deck Added</Text>

    let list = Object.keys(decks)
    return list.length > 0 ? list.map(l => <Deck key={decks[l].title} data={decks[l]}/>) : <Text>No Deck Added</Text>
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        {this.renderDeckList()}
      </ScrollView>
    )
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    decks: store.decks
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDecks: (decks) => dispatch({type: 'GET_DECKS', payload: decks})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)