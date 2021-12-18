import React from 'react';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles'
import { Container } from '@mui/material';

const theme = createTheme();
const useStyles = makeStyles((theme2) => ({
    container: {
        marginTop: theme.spacing(11)
    }
}));
const Feed = () => {
    const classes = useStyles({})
    return (
        <Container className={classes.container}>
            Feed
        </Container>
    );
}

export default Feed;
