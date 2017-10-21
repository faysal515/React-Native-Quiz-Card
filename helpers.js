import {AsyncStorage} from 'react-native'

// {
//   React: {
//     title: 'React',
//       questions: [
//       {
//         question: 'What is React?',
//         answer: 'A library for managing user interfaces'
//       },
//       {
//         question: 'Where do you make Ajax requests in React?',
//         answer: 'The componentDidMount lifecycle event'
//       }
//     ]
//   },
//   JavaScript: {
//     title: 'JavaScript',
//       questions: [
//       {
//         question: 'What is a closure?',
//         answer: 'The combination of a function and the lexical environment within which that function was declared.'
//       }
//     ]
//   }
// }

// getDecks
// getDeck
// saveDeckTitle
// addCardToDeck

export const getDecks = async () => {
  return await AsyncStorage.getItem('decks')
}

export const getDeck = async (id) => {
  let raw = await AsyncStorage.getItem('decks') ,
    decks = await JSON.parse(raw) || {}
    return decks[id]
}

export const saveDeckTitle = async (title) => {
  let raw = await AsyncStorage.getItem('decks') ,
    decks = JSON.parse(raw) || {}
    decks[title] = {
      title: title,
      questions: []
    }

    await AsyncStorage.setItem('decks', JSON.stringify(decks))
  //return decks[id]
}


