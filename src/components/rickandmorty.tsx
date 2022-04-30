import {styled, Pagination, FormControl, MenuItem, InputLabel, Select, CircularProgress  } from '@mui/material';
import { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { useCharActions } from '../hooks/useCharAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RickActionType } from '../types/characterTypes';
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
    const { characters, loading, sortBy, pageInfo } = useTypedSelector((state) => state.rick)
    const dispatch = useDispatch();
    const { fetchChars } = useCharActions();
    console.log('rick',characters)
    useEffect(() => {
      fetchChars({page: 1, sort: 'alive'})
    }, [fetchChars])
    const searchCharacter = useCallback(({ page = 1, sort = sortBy }) => {
      fetchChars({page, sort})
    }, [sortBy, fetchChars]);
    const setSortBy = useCallback((payload: string) => {
      dispatch({type: RickActionType.SORT_CHARACTER , payload: payload})
    }, [dispatch]);
    if (loading) {
        return (
          <CircularProgress />
        )
    }
    /* if (error) {
        return (
            <h1 style={{ border: '1px solid red' }}>{error}</h1>
        )
    } */
    

    return (
      <div>
        <div style={{ marginLeft: '500px', marginTop: '100px', flexGrow: 1, maxWidth: '300px' }}>
              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={sortBy}
                      label="Sort by"
                      onChange={(e) => {
                          setSortBy(e.target.value);
                          searchCharacter({ sort: e.target.value })
                      }}
                      size="small"
                  >
                      <MenuItem value="alive">Alive</MenuItem>
                      <MenuItem value="unknown">Unknown</MenuItem>
                      <MenuItem value="dead">Dead</MenuItem>
                  </Select>
              </FormControl>
      </div>
        <Cards>
            {characters.results && characters.results.map((char) => (
              <RickItem key={char.id} char={char} />
            ))}
        </Cards>
        <Pagination count={pageInfo.total_page} page={pageInfo.page} onChange={(e, value) => searchCharacter({ page: value })}/>
      </div> 
    )
}

