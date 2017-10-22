const reducer = (state = {}, action ) => {
  let decks, aDeck;
  switch(action.type) {
    case 'GET_DECKS':
      return {...state, decks: action.payload}

    case 'ADD_DECK':
      decks = {...state.decks}
      decks[action.payload.title] = action.payload
      return {...state, decks: decks}

    case 'ADD_QUESTION':
      decks = {...state.decks}
      aDeck = state.decks[action.payload.deck]
      aDeck.questions.push(action.payload.questionData)
      decks[action.payload.deck] = aDeck
      return {...state, decks: decks}
    default:
      return state
  }
}


export default reducer