const reducer = (state = {}, action ) => {
  let decks;
  switch(action.type) {
    case 'GET_DECKS':
      return {...state, decks: action.payload}

    case 'ADD_DECK':
      decks = {...state.decks}
      decks[action.payload.title] = action.payload
      return {...state, decks: decks}
    default:
      return state
  }
}


export default reducer