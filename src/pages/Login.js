import React from 'react';
import Header from '../shared/Header';
import LoginForm from '../components/LoginForm';
import { Grid } from '../elements';

function Login() {
  return (
    <React.Fragment>
      <Grid bg="rgb(250, 250, 250)" height="100vh">
        <Header />
        <Grid padding={'50px 0'}>
          <LoginForm />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Login;
