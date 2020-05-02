import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { Container, Button, FormControl, FormGroup } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {

            width: 200,
        },
    },
}));




const LoginPage = () => {
    const classes = useStyles();
    const history = useHistory();

    const handleSubmit = () => {
        history.push("/Home")
    }
    return (
        <div className="Login">
            <Container maxWidth='xs'>
                <div className="Login-heading">Welcome to CouplesToDo</div>
                <div style={{ marginTop: 80 }}>
                    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <FormGroup>
                            <p>Username</p>
                            <FormControl>
                                <TextField id="outlined-basic" type="email" variant="outlined" />
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <p>Password</p>
                            <FormControl>
                                <TextField id="outlined-basic" type="password" variant="outlined" />
                            </FormControl>
                        </FormGroup>
                        <br />
                        <Button variant="contained" color="primary" type="submit">
                            Log in
                        </Button>
                        <p>Don't have an account?</p>
                        <Button variant="contained" color="secondary">
                            Sign up
                        </Button>

                    </form>
                </div>
            </Container>
            <footer >
                <p>Dedicated to my beloved Debra</p>
            </footer>
        </div >


    )
}

export default LoginPage;