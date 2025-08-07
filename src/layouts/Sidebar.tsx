import React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';

const drawerWidth = 240;

const Sidebar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', borderRight: '1px solid #E2E8F0', elevation: 0 },
      }}
    >
      <Box sx={{ overflow: 'auto', pt: '80px' }}> {/* Espaço para o Header */}
        <List>
          {/* Usamos NavLink para o link de navegação */}
          <NavLink to="/colaboradores" style={{ textDecoration: 'none', color: 'inherit' }}>
            {({ isActive }) => (
              <ListItem disablePadding>
                <ListItemButton selected={isActive}>
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Colaboradores" />
                </ListItemButton>
              </ListItem>
            )}
          </NavLink>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;