import React from 'react';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles'
import { Avatar, AvatarGroup, Container, ImageList, ImageListItem, Typography } from '@mui/material';
import paella from "../images/paella.jpg"; 
import md from "../images/md.jpg"; 
import che from "../images/che.jpg"; 

const theme = createTheme();
const useStyles = makeStyles((theme2) => ({
    container: {
        marginTop: theme.spacing(11)
    }
}));
const RightBar = () => {
    const classes = useStyles({})
    return (
        <Container className={classes.container}>
            <Typography variant="h6">Online friends</Typography>
            <AvatarGroup max={4} style={{marginBottom:20}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>

                <ImageListItem>
                    <img
                        src={che}
                        srcSet={che}
                        alt="Trevor Henderson"
                        loading="lazy"
                    />
                    <img
                        src={paella}
                        srcSet={paella}
                        alt="Trevor Henderson"
                        loading="lazy"
                    />
                    <img
                        src={md}
                        srcSet={md}
                        alt="Trevor Henderson"
                        loading="lazy"
                    />
                </ImageListItem>

            </ImageList>
        </Container>


    );
}

export default RightBar;
