import {styled} from '@mui/material';

import { FC } from 'react'
import { Character } from '../types/characterTypes'
const Avatar = styled('img')`
  width: 80px;
  height: 130px;
  border: solid 1px gray;
  border-radius: 20px;
  object-fit: cover;
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
type Props = {
    char: Character
}
export const RickItem:FC<Props> = ({ char }) => {
    return (
      <Card key={char.id}>
        <Avatar src={char.image} />
        <span>{char.name}</span>
      </Card>
    )
}