import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';
import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles'
import { Cancel, Mail, Notifications, Search } from '@mui/icons-material';
import { display } from '@mui/system';
import paella from "../images/paella.jpg";
import md from "../images/md.jpg"
import che from "../images/che.jpg"



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
            display: (props) => (props.open ? "flex" : "none"),
            width: "50%",

        },
    },
    input: {
        color: "white",
        marginLeft: theme.spacing(2)
    },
    cancel: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },
    },
    icons: {
        alignItems: "center",
        display: (props) => (props.open ? "none" : "flex")
    },
    badge: {
        marginRight: theme.spacing(2)
    }
}));

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyles({ open })
    return (
        <AppBar position="fixed">
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
                    <div className={classes.cancel}><Cancel onClick={() => setOpen(false)} /></div>
                </div>
                <div className={classes.icons}>
                    <div className={classes.searchButton}>
                        <Search
                            onClick={() => setOpen(true)}
                        />
                    </div>
                    <Badge badgeContent={4} color="secondary" className={classes.badge} >
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="secondary" className={classes.badge}>
                        <Notifications />
                    </Badge >
                    <Avatar alt="Remy Sharp" src={paella} />
                    <Avatar alt="Remy Sharp" src={che} />
                    <Avatar alt="Travis Howard" src={md} />
                </div>
            </Toolbar >
        </AppBar >
    );
}

export default NavBar;
