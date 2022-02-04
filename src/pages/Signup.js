import React from 'react';
import SignupForm from '../components/SignupForm';
import Header from '../shared/Header';
import { Grid } from '../elements';

function Signup() {
  return (
    <React.Fragment>
      <Grid bg="rgb(250, 250, 250)" height="100vh">
        <Header />
        <SignupForm />
      </Grid>
    </React.Fragment>
  );
}

export default Signup;
