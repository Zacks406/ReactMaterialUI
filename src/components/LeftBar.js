import React from 'react';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles'
import { Bookmark, ExitToApp, Home, Person, List, PhotoCamera, PlayCircleOutline, Settings, Storefront, TabletMac } from '@mui/icons-material';
import { Container, Typography } from '@mui/material';




const theme = createTheme();
const useStyles = makeStyles((theme2) => ({
    container: {
        height: "100vh",
        color: "white",
        marginTop: theme.spacing(7),
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up("sm")]: {
            marginTop: theme.spacing(8),
            backgroundColor: "white",
            color: "#555",
            border: "1px solid #ece7e7"

        },
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer"
        },
    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            fontSize: "18px",
        },
    },
    text: {
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    }
}));
const LeftBar = () => {
    const classes = useStyles({})
    return (
        <Container className={classes.container}>
            <div className={classes.item}>

            </div>
            <div className={classes.item}>
                <Home className={classes.icon}></Home>
                <Typography className={classes.text}>HomePage</Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icon}></Person>
                <Typography className={classes.text}>Friends</Typography>
            </div>
            <div className={classes.item}>
                <List className={classes.icon}></List>
                <Typography className={classes.text}>List</Typography>
            </div>
            <div className={classes.item}>
                <PhotoCamera className={classes.icon}></PhotoCamera>
                <Typography className={classes.text}>Camera</Typography>
            </div>
            <div className={classes.item}>
                <PlayCircleOutline className={classes.icon}></PlayCircleOutline>
                <Typography className={classes.text}>Videos</Typography>
            </div>
            <div className={classes.item}>
                <TabletMac className={classes.icon}></TabletMac>
                <Typography className={classes.text}>Apps</Typography>
            </div>
            <div className={classes.item}>
                <Bookmark className={classes.icon}></Bookmark>
                <Typography className={classes.text}>collections</Typography>
            </div>
            <div className={classes.item}>
                <Storefront className={classes.icon}></Storefront>
                <Typography className={classes.text}>Market Place</Typography>
            </div>
            <div className={classes.item}>
                <Settings className={classes.icon}></Settings>
                <Typography className={classes.text}>Settings</Typography>
            </div>
            <div className={classes.item}>
                <ExitToApp className={classes.icon}></ExitToApp>
                <Typography className={classes.text}>Logout</Typography>
            </div>

        </Container>
    );
}

export default LeftBar;
