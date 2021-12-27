import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles'
import { Alert, Button, Fab, FormControlLabel, FormLabel, MenuItem, Modal, RadioGroup, Snackbar, TextField, Tooltip } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { Container, FormControl, Radio } from '@mui/material';
import MuiAlert from '@mui/material/Alert';



const theme = createTheme();
const useStyles = makeStyles((theme2) => ({
    fab: {
        position: "fixed",
        bottom: "20",
        right: "20",
    },
    container: {
        height: 600,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "100vh"
        },
    },
    form: {
        padding: theme.spacing(3)
    },
    item: {
        marginBottom: theme.spacing(3)
    }
}));


const Add = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };
    return (
        <div>
            <Tooltip title="add" area-label="add" onClick={() => setOpen(true)}>
                <Fab color="primary" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container} style={{ width: "500px" }}>
                    <form className={classes.form} autoComplete="off">
                        <div className={classes.item}>
                            <TextField id="standard-basic"
                                label="Title"
                                size="small"
                                style={{ width: "100%" }} />
                        </div>
                        <div className={classes.item}>
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                                defaultValue="Tell your story..."
                                variant="outlined"
                                label="Decription"
                                size="small"
                                style={{ width: "100%" }} />
                        </div>
                        <div className={classes.item}>
                            <TextField select label="visibility" value=" public" style={{ display: "flex" }}>
                                <MenuItem value="public">public</MenuItem>
                                <MenuItem value="private">private</MenuItem>
                                <MenuItem value="unlisted">unlisted</MenuItem>
                            </TextField>
                        </div>
                        <div>

                            <FormControl component="fieldset" >
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup
                                    aria-label="gender"
                                    name="controlled-radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="female"
                                        control={<Radio />}
                                        label="Female" />

                                    <FormControlLabel
                                        value="male"
                                        control={<Radio />}
                                        label="Male" />

                                    <FormControlLabel
                                        value="male"
                                        control={<Radio />}
                                        label="Male" />

                                    <FormControlLabel
                                        value="male"
                                        control={<Radio />}
                                        label="Male" />

                                    <FormControlLabel
                                        value="male"
                                        control={<Radio />}
                                        label="Male" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div>
                            <Button
                                variant="outlined"
                                color="primary"
                                style={{ marginRight: 20 }}
                                onClick={() => setOpenAlert(true)}
                            >
                                Create
                            </Button>

                            <Button
                                variant="outlined"
                                color="primary"
                                style={{ marginRight: 20 }}
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Container>
            </Modal>
            <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Add;
