import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import React from 'react';
import { URL } from '../../base/constants/routesPath';
import { Link } from 'react-router-dom';

const pages = [
  { id: 1, title: 'Home', route: URL.HOME_PAGE },
  { id: 2, title: 'About', route: URL.ABOUT_PAGE },
  { id: 3, title: 'Blog', route: URL.BLOG_PAGE },
];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    // removeCookies('token');
  };
  const handleProfile = () => {};
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Typography justifyContent="center">
                      <Link to={page.route} style={{ textDecoration: 'none' }}>
                        {page.title}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Typography textAlign="center">
                    <Link
                      to={page.route}
                      style={{ color: 'white', textDecoration: 'none' }}
                    >
                      {page.title}
                    </Link>
                  </Typography>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {/* {session === null && token === undefined && ( */}
                <div>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link
                      to={URL.LOGIN_PAGE}
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography textAlign="center">Login</Typography>
                    </Link>
                  </MenuItem>

                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link
                      to={URL.REGISTER_PAGE}
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography textAlign="center">Signup</Typography>
                    </Link>
                  </MenuItem>
                </div>
                {/* )} */}

                {/* {session && ( */}
                <div>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Button onClick={handleProfile}>Profile</Button>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Button onClick={handleLogout}>Logout</Button>
                  </MenuItem>
                </div>
                {/* )} */}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
