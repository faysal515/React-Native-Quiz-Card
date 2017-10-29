import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Deck extends Component {
  render() {
    const { title, questions } = this.props.data;
    const {navigation} = this.props
    return (
      <View>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate('DeckView', { title, questions })}
        >
        <Text style={{fontSize: 22, color: '#f7f7f7', fontWeight: '700'}}>{title}</Text>
        <Text style={{fontSize: 14, color: '#f7f7f7'}}>{`${questions.length} cards`}</Text>
      </TouchableOpacity>
      </View>

    );
  }
}


/*<TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('DeckView', { name, imageSource, questions })}>
        <Text style={{fontSize: 22, color: '#f7f7f7', fontWeight: '700'}}>{name}</Text>
        <Text style={{fontSize: 14, color: '#f7f7f7'}}>{`${questions.length} cards`}</Text>
      </TouchableOpacity>*/
const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#333333',
    borderRadius: 4,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOpacity: 0.8,
    alignItems: 'center',
  },
});
