import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar'; // Importamos o novo componente Sidebar

const AppLayout: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar /> {/* Usamos o componente Sidebar real aqui */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          minHeight: '100vh',
          marginLeft: '240px', // Largura da Sidebar
          marginTop: '64px',   // Altura do Header
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;