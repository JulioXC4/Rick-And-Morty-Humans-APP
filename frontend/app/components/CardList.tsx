'use client'

import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import { createCharacterAdapter } from '../adapters';
import CardComponent from './Card';

import { Characters } from '../models';
interface CharacterListProps {
    characters: [];
};

export default function CardListComponent({ characters }: Characters) {
    return (
        <Box sx={{ flexGrow: 1, margin: '16px' }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {characters.map((character, index) => { 
              const adaptedCharacter = createCharacterAdapter(character);
              return (
                <Grid xs={4} sm={4} md={4} key={index}>
                  <CardComponent characterProps={adaptedCharacter} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      );
}