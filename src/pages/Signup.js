import React from 'react';
import SignupForm from '../components/SignupForm';
import Header from '../shared/Header';
import { Grid } from '../elements';

function Signup() {
  return (
    <React.Fragment>
      <Grid bg="rgb(250, 250, 250)" height="100vh">
        <Header />
        <Grid padding={'50px 0'}>
          <SignupForm />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Signup;
