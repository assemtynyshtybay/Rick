import axios from 'axios';
import { Dispatch } from 'redux';
import { Info, CharAction, RickActionType } from '../../types/characterTypes';
type Args = {
  page: number | undefined,
  sort: string | undefined,
}
export const fetchChars = ({page = 1 ,sort='alive'} : Args) => (dispatch: Dispatch<CharAction>) => {
    dispatch({ type: RickActionType.FETCH_CHARACTERS })
    axios.get<Info>(`https://rickandmortyapi.com/api/character?status=${sort}&page=${page}`).then((res) => {
        setTimeout(() => {
          dispatch({ type: RickActionType.FETCH_CHARS_SUCCESS, payload: res.data })
          dispatch({ type: RickActionType.PAGE_INFO, payload: {page: page, total_page: Math.min(res.data.info.pages, 500)}})
        },1000)
    })
    .catch(() => {
        dispatch({ type: RickActionType.FETCH_CHARS_REJECT, payload: 'Ошибка при загрузке персонажей' })
    })
}