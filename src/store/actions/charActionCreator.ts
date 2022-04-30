import axios from 'axios';
import { Dispatch } from 'redux';
import { Character, CharAction, RickActionType } from '../../types/characterTypes';

export const fetchChars = () => (dispatch: Dispatch<CharAction>) => {
    dispatch({ type: RickActionType.FETCH_CHARACTERS })
    axios.get<Character[]>('https://rickandmortyapi.com/api/character').then((res) => {
        setTimeout(() => {
          dispatch({ type: RickActionType.FETCH_CHARS_SUCCESS, payload: res.data })
        },1000)
    }).catch(() => {
        dispatch({ type: RickActionType.FETCH_CHARS_REJECT, payload: 'Ошибка при загрузке персонажей' })
    })
}