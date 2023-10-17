'use client'

import { Box } from "@mui/material";
import PaginationComponent from "../Pagination";

import CardListComponent from "../CardList";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks/hooks";
import { setCharacters, setPage } from "@/app/redux/slices/characterSlice";
import Navbar from "../Navbar";


export default function Landing({characters} : any) {
  const dispatch = useAppDispatch();
  const charactersState = useAppSelector((state) => state.characters.characters);
  useEffect(() => {
    dispatch(setCharacters(characters))
    dispatch(setPage(1))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  return (
    <div>
      <Navbar />
      <Box display="flex" justifyContent="center" my={4}>
        <PaginationComponent />
      </Box>
      <CardListComponent characters={charactersState} />
      <Box display="flex" justifyContent="center" my={4}>
        <PaginationComponent />
      </Box>
    </div>
  );
}