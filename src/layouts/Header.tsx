import React from 'react';
import { AppBar, Toolbar, Box, IconButton, Stack, Avatar } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import logo from '@/assets/flugo_hor.png'; // 1. Importamos a imagem do logo

const Header: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: 'white',
        borderBottom: '1px solid #E2E8F0',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        {/* 2. Substituímos o Box e Typography pelo logo */}
        <img src={logo} alt="Flugo logo" style={{ height: '28px' }} />

        {/* Espaçador para empurrar os ícones para a direita */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Ícones da Direita */}
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton sx={{ color: '#64748B' }}>
            <NotificationsNoneIcon />
          </IconButton>
          <Avatar sx={{ width: 32, height: 32 }}>V</Avatar>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;