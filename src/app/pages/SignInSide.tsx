import React, { ReactElement, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { SubmitHandler, useForm } from 'react-hook-form';
// import { useSessionContext } from '../../contexts/SessionContext';
import { useHistory } from 'react-router-dom';
// import { Delay } from '../utils/Delay';
import { CircularProgress } from '@material-ui/core';
import globalState from '../../stores/GlobalStore';
import { useState } from '@hookstate/core';
import AuthService from '../services/auth.service';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/featured/?jesus)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  circularProgress: {
    marginLeft: 0,
    marginRight: theme.spacing(1),
  },
}));

type FormData = {
  email: string;
  password: string;
};

export default function SignInSide(props: any): ReactElement {
  const classes = useStyles();
  const loading = useState(false);
  const history = useHistory();
  const gState = useState(globalState);

  useEffect(() => {
    //Logout the user
    gState.isAuthenticated.set(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  
  const onSubmit: SubmitHandler<FormData> = async (formData: FormData) => {
    loading.set(true);
    // await Delay(5000);  //simulate time to make api call
    try {
      await AuthService.login(formData.email, formData.password);
      history.push(gState.redirectPath.get());  // Redirect
    } finally {
      loading.set(false);
      reset(formData);
      return formData;
    }
  };

  return (
    
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}
              className={classes.form} >
            <TextField {...register("email")}
              variant="outlined" margin="normal"
              required fullWidth
              name="email" id="email"  label="Email Address"
              autoComplete="email"
              autoFocus
            />
            <TextField {...register("password")}
              variant="outlined" margin="normal"
              required fullWidth
              name="password" label="Password"
              type="password" id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button type="submit" fullWidth
              variant="contained" color="primary"
              className={classes.submit}  disabled={loading.get()}
            >
              {loading && (
                     <CircularProgress className={classes.circularProgress} size={20}/>
                  )
              }
              Sign In
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </form>
        </div>
      </Grid>
    </Grid>
  );
}