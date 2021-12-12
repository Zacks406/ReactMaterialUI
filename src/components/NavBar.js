import React from 'react';
import { makeStyles } from '@mui/styles';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles'
import { Mail, Notifications, Search } from '@mui/icons-material';

//just initialized a .git in my local folder
const theme = createTheme();
const useStyles = makeStyles((theme2) => ({

    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up('sm')]: {
            display: "block"
        },
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },
    },
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    },
    searchButton: {
        marginRight: theme.spacing(2),
    },
    icons: {
        display: "flex",
        alignItems: "center"
    },
    input: {
        color: "white",
        marginLeft: theme.spacing(2)
    },
    badge: {
        marginRight: theme.spacing(2)
    }
}));

const NavBar = () => {
    const classes = useStyles()
    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logoLg}>
                    ZeeBites Dev
                </Typography>
                <Typography variant="h6" className={classes.logoSm}>
                    ZeeBites
                </Typography>
                <div className={classes.search}>
                    <Search />
                    <InputBase placeholder="Search..." className={classes.input} />
                </div>
                <div className={classes.icons}>
                    <Search className={classes.searchButton} />
                    <Badge badgeContent={4} color="secondary" className={classes.badge} >
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="secondary" className={classes.badge}>
                        <Notifications />
                    </Badge >
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </div>
            </Toolbar >
        </AppBar >
    );
}

export default NavBar;
