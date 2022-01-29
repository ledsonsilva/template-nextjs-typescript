import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

import { FC, useState } from "react";
import { styled } from '@mui/material/styles';
import { Bell as BellIcon } from '@icons/bell';
import { UserCircle as UserCircleIcon } from '@icons/user-circle';
import { AppBar, Badge, Box, IconButton, Toolbar, Tooltip, Avatar, Menu, MenuItem, Typography, Divider, ListItemIcon } from '@mui/material';

const NavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

const Navbar: FC<NavbarProps> = ({ onSidebarOpen, ...other }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleClick = (event: any): void => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <NavbarRoot
        sx={{
          left: {
            lg: 280
          },
          width: {
            lg: 'calc(100% - 280px)'
          }
        }}
        {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Notificações">
            <IconButton sx={{ mr: 1 }}>
              <Badge
                badgeContent={1}
                color="primary"
                variant="dot"
              >
                <BellIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Opções do perfil">
            <Avatar
              onClick={handleClick}
              sx={{
                height: 38,
                width: 38,
                ml: 1,
                cursor: 'pointer'
              }}
              src="/static/images/avatar_1.png"
            >
              <UserCircleIcon fontSize="small" />
            </Avatar>
          </Tooltip>
          <Menu
            keepMounted
            id="menu-appbar"
            anchorEl={anchorEl}
            sx={{ mt: '40px' }}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              elevation: 3,
              sx: {
                border: '1px solid rgba(0, 0, 0, 0.12)'
              }
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Box sx ={{ width: '290px', padding: '16px', display: 'flex' }}>
              <Avatar
                sx={{
                  height: 45,
                  width: 45,
                  mr: 1
                }}
                src="/static/images/avatar_1.png"
              >
                <UserCircleIcon fontSize="small" />
              </Avatar>
              <Box>
                <Typography variant='body1'>Rayanne S.</Typography>
                <Typography variant='body2' color='rgb(101, 116, 139)'>Perfil: Administrador</Typography>
              </Box>
            </Box>
            <Divider sx={{ mb: 1 }} />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <Typography textAlign="center">Configurações</Typography>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <Typography textAlign="center">Sair</Typography>
            </MenuItem>
          </Menu>

        </Toolbar>
      </NavbarRoot>
    </>
  ); 
}

type NavbarProps = {
  onSidebarOpen: any;
}

export default Navbar;
