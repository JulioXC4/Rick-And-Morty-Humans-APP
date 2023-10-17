import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { setPage } from '../redux/slices/characterSlice';

export default function PaginationComponent() {
  const dispatch = useAppDispatch()

  const currentPage = useAppSelector((state) => state.characters.currentPage);
  const totalCharacters = useAppSelector((state) => state.characters.total);

  const handleChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    dispatch(setPage(newPage))
  };

  return (
    <Stack spacing={2}>
      <Pagination count={totalCharacters} page={currentPage} onChange={handleChange} />
    </Stack>
  );
}