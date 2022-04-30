export enum RickActionType {
  FETCH_CHARACTERS = 'set/characters',
  FETCH_PAGE = 'set/page',
  FETCH_SORT = 'sort/by',
  FETCH_CHARS_SUCCESS = 'FETCH_CHARS_SUCCESS',
  FETCH_CHARS_REJECT = 'FETCH_CHARS_REJECT',
  PAGE_INFO = 'set/pagination',
  SORT_CHARACTER = 'sort/status',
}
export type Character = {
  id: number,
  name: string,
  image: string,
  status: string,
}
export type PageInfo = {
  count: 0,
  pages: 0,
  next: "",
  prev: null
}
export type Info = {
  info: PageInfo,
  results: Character[],
}
export type PageInfo2 = {
  page: number,
  total_page: number
}
export type CharacterState = {
  characters: Info,
  loading: boolean,
  pageInfo: PageInfo2,
  sortBy: string,
  error?: string
}
export type FetchCharAction = {
  type: RickActionType.FETCH_CHARACTERS,
}
export type FetchPage = {
  type: RickActionType.PAGE_INFO,
  payload: PageInfo2,
}
export type FetchSorting = {
  type: RickActionType.SORT_CHARACTER,
  payload: string,
}
export type FetchCharSuccessAction = {
  type: RickActionType.FETCH_CHARS_SUCCESS,
  payload: Info
}
export type FetchUserRejectAction = {
  type: RickActionType.FETCH_CHARS_REJECT,
  payload: string
}

export type CharAction = FetchCharAction | FetchCharSuccessAction | FetchUserRejectAction | FetchPage | FetchSorting;