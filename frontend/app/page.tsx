"use client";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { Slideshow } from "./components/landing/SlideShow";
import Link from "next/link";

const buttonVariants = {
  rest: { scale: 1.8 },
  hover: { scale: 1.4 },
};

const buttonStyle = {
  backgroundColor: '#C0DF40', // Reemplaza este valor con tu color hexadecimal
  color: '#40B5CB', // Cambia el color del texto según tus preferencias
};

export default function Home() {
  return (
    <Box className="landing-page" display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <Slideshow img="/rym_logo.png"/>
      <motion.div
        whileHover="hover"
        variants={buttonVariants}
        initial="rest"
      >
        <Link href="/home" >
          <Button 
            variant="contained" 
            size="large" 
            style={buttonStyle}
          >
            Get Started
          </Button>
        </Link>
      </motion.div>
    </Box>
  );
}