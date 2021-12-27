import React from 'react';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import paella from "../images/paella.jpg"

const theme = createTheme();
const useStyles = makeStyles((theme2) => ({
    media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height: 150,
        }
    },
    card: {
        marginBottom: theme.spacing(5)
    }
}));
const Post = () => {
    const classes = useStyles({})
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={paella}
                    title="My Post"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">My First Post</Typography>
                    <Typography variant="body">
                        Lorem klgjlgj gjksdgj;lajg gjklgjdljkg
                        gajflkgjld;agj gjfdkljglfgjl fkgjgjieowjf
                        fjdksfjofjiero lkfoerjfoijgforkjk
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    color="primary">
                    Share
                </Button>
                <Button
                    size="small"
                    color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;
