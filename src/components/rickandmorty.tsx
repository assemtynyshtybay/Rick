import {styled} from '@mui/material';
import { useEffect } from 'react'
import { useCharActions } from '../hooks/useCharAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RickItem } from './itemRick';
const Avatar = styled('img')`
  width: 80px;
  height: 130px;
  border: solid 1px gray;
  border-radius: 20px;
  object-fit: cover;
`
const Cards = styled('div')`
  padding: 5% 10%;
  margin: 0 auto;
  align-items: center;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-auto-rows: minmax(300px, auto);
  grid-column-gap: 10px;
  grid-row-gap: 1em;
  background: 
`
const  Card = styled('div')`
  position: grid;
  grid-template-columns: 1fr 1fr;
  width: 500px;
  border: solid 1px gray;
  border-radius: 20px;
  padding: 10px 20px;
  grid-column-gap: 10px;
  display: flex;
`
export function RickList() {
    const { characters, loading } = useTypedSelector((state) => state.rick)
    const { fetchChars } = useCharActions();

    useEffect(() => {
        fetchChars()
    }, [fetchChars])

    if (loading) {
        return (
            <h1>Загрузка пользователей</h1>
        )
    }
    /* if (error) {
        return (
            <h1 style={{ border: '1px solid red' }}>{error}</h1>
        )
    } */

    return (
      <div>
          <Cards>
              {characters.map((char) => (
                <RickItem key={char.id} char={char} />
              ))}
          </Cards>
      </div> 
    )
}

