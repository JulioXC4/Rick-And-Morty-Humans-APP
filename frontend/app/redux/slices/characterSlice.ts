import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Character, Characters } from '@/app/models';

  interface CharactersState {
    allCharacters: Character[];
    characters: Character[];
    currentPage: number;
    perPage: number;
    total: number;
  }
  
  const initialState: CharactersState = {
    allCharacters: [],
    characters: [],
    currentPage: 1,
    perPage: 6, 
    total: 0, 
  };
  
  export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
      setCharacters: (state, action: PayloadAction<Character[]>) => {
        state.allCharacters = action.payload;
        state.total = Math.ceil(action.payload.length / state.perPage);
      },
      setPage: (state, action: PayloadAction<number>) => {
        state.currentPage = action.payload;
        const startIndex = (state.currentPage - 1) * state.perPage;
        const endIndex = startIndex + state.perPage;
        state.characters = state.allCharacters.slice(startIndex, endIndex);
      },
    },
  });

  export const { setCharacters, setPage } = charactersSlice.actions

export default charactersSlice.reducer
  