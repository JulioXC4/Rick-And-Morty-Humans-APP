import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Link from 'next/link';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

function NavBar() {

  return (
    <AppBar position="static" sx={{ backgroundColor: '#C0DF40' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Link href="/">
            <img
              src="/rym_logo.png"
              alt="Logo"
              style={{ display: 'block', maxHeight: '65px', margin: '8px' }} // Ajusta el tamaño y el margen según tus necesidades
            />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;