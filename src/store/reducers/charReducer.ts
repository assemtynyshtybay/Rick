import { Reducer } from 'redux'
import { CharacterState, CharAction, RickActionType } from '../../types/characterTypes'

const initState: CharacterState = {
  characters: {
    info: {
      count: 0,
      pages: 0,
      next: "",
      prev: null
    },
    results: []
  },
  loading: false,
  sortBy: 'alive',
  pageInfo: {
    page: 1,
    total_page: 42,
  }
}
export const charReducer: Reducer<CharacterState, CharAction> = (state = initState, action) => {
    switch (action.type) {
        case RickActionType.FETCH_CHARACTERS:
            return { ...state, loading: true, error: undefined }
        case RickActionType.FETCH_CHARS_SUCCESS:
            return { ...state, characters: action.payload, loading: false }
        case RickActionType.FETCH_CHARS_REJECT:
            return { ...state, error: action.payload, loading: false }
        default:
            return state
     }
}