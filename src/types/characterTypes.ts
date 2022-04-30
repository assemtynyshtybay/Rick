export enum RickActionType {
  FETCH_CHARACTERS = 'set/characters',
  FETCH_PAGE = 'set/page',
  FETCH_SORT = 'sort/by',
  FETCH_CHARS_SUCCESS = 'FETCH_CHARS_SUCCESS',
  FETCH_CHARS_REJECT = 'FETCH_CHARS_REJECT'
}
export type Character = {
  id: 1,
  name: '',
  image: '',
  status: '',
}
export type CharacterState = {
  characters: Character[],
  loading: boolean,
  error?: string
}
export type FetchCharAction = {
  type: RickActionType.FETCH_CHARACTERS,
}
export type FetchCharSuccessAction = {
  type: RickActionType.FETCH_CHARS_SUCCESS,
  payload: Character[]
}
export type FetchUserRejectAction = {
  type: RickActionType.FETCH_CHARS_REJECT,
  payload: string
}

export type CharAction = FetchCharAction | FetchCharSuccessAction | FetchUserRejectAction