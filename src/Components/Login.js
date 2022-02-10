import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
import { useHistory } from 'react-router-dom';
import { Button,TextField, FormControlLabel, Checkbox, Link, Paper, Typography, Box , Grid, Container, Avatar} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleLogin from 'react-google-login';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Login = (props) => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

  };

  const responseGoogle = (response) => {
    console.log('response called',response.tokenObj.access_token)
    if(response.tokenObj.access_token)
      history.push('/Dashboard') 
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" style={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={8}
          spacing={0}
          style={{
            margin:"-8px",
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={4}  >
          <Container>
          <Box
            style={{
              margin : "100px 3px",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <div>
                <GoogleLogin
                  clientId="683304441347-rq569mc60l17lvbsapjpunaetspfch40.apps.googleusercontent.com"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
                  render={renderProps => (
                    <Button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      fullWidth
                      variant='outlined'
                      size="large"
                      style={{ margin: "10px 0px" }}
                    >
                        Sign in with Google
                    </Button>
                  )}
                />
            <Button 
              type='button' 
              fullWidth 
              variant='outlined'
              size="large"
              style = {{ margin:"10px 0px" }}
              //startIcon={<FacebookIcon />}
            >
              Sign in with Facebook
            </Button>
            </div>
            <Divider variant="middle" />
            <div>
            <Box component="form" noValidate onSubmit={handleSubmit} style={{ marginTop:10 }}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: 3, marginBottom: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
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
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
            </div>
          </Box>
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;