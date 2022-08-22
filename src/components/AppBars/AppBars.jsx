import * as React from 'react';
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
import DiscountIcon from '@mui/icons-material/Discount'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
import SettingsIcon from '@mui/icons-material/Settings';
import { TitulosYTexto } from '../../utils/Data'

const pages = ['Empresa', 'Contactenos', 'Noticias'];
const pagesForUserLogged = ['Empresa', 'Contactenos', 'Noticias', 'Comprar']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const pagesLogin = ['Login', 'Registro']
const nombreEmpresa = TitulosYTexto().nombreEmpresa
const AppBars = ({ EstaLogueado, Logout }) => {
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
        Logout(false)
    }
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2',
            },
        },
    })

    const handlePagesAppBar = (pages) => {
        return pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                    <Link to={`/${page}`} component={RouterLink} underline="hover" color='inherit'>
                        {page}
                    </Link>
                </Typography>
            </MenuItem>
        ))
    }
    const handlePagesMobile = (pages) => {
        return pages.map((page) => (
            <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to={`/${page}`} component={RouterLink} underline="hover" color='inherit'>
                    {page}
                </Link>
            </Button>
        ))
    }

    const MobileAppBar = () => {
        return (
            <>
                <DiscountIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
                    <Link to='/' component={RouterLink} underline="hover" color='inherit'>
                        {nombreEmpresa}
                    </Link>
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit">
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
                        }}>
                        {
                            EstaLogueado
                                ? (handlePagesAppBar(pagesForUserLogged))
                                : (handlePagesAppBar(pages))
                        }
                    </Menu>
                </Box>
            </>
        )
    }

    const DeskAppBar = () => {
        return (
            <>
                <DiscountIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Typography
                    variant="h5"
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
                    <Link to='/' component={RouterLink} underline="hover" color='inherit'>
                        {nombreEmpresa}
                    </Link>
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {
                        EstaLogueado
                            ? (handlePagesMobile(pagesForUserLogged))
                            : (handlePagesMobile(pages))
                    }
                </Box>
            </>
        )
    }

    const SettingMenu = () => {
        return (
            <>
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
                        onClose={handleCloseUserMenu}>
                        {settings.map((setting) => (
                            setting !== 'Logout'
                                ? (<MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>)
                                : (<MenuItem key={setting} onClick={handleLogout}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>)
                        ))}
                    </Menu>
                </Box>
            </>
        )
    }

    const MenuUserNoLogin = () => {
        return (
            <>
                <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                    {pagesLogin.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}>
                            <Link to={`/${page}`} component={RouterLink} underline="hover" color='inherit'>
                                {page}
                            </Link>
                        </Button>
                    ))}
                </Box>

                <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <SettingsIcon />
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
                        onClose={handleCloseUserMenu}>
                        {pagesLogin.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Link to={`/${setting}`} component={RouterLink} underline="hover" color='inherit'>
                                    <Typography textAlign="center">{setting}</Typography>
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </>
        )
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color="primary" position='fixed'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {MobileAppBar()}
                        {DeskAppBar()}
                        {
                            EstaLogueado
                                ? SettingMenu()
                                : MenuUserNoLogin()
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};

AppBars.defaultProps = {
    EstaLogueado: false
}
export default AppBars;
