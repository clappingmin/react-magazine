import React from 'react';
import Header from '../components/Header';
import { Grid, Text, Input, Button } from '../elements';

function Signup() {
  return (
    <React.Fragment>
      <Grid bg="rgb(250, 250, 250)" height="100vh">
        <Header />
        <Grid
          border="1px solid rgb(219, 219, 219)"
          width="485px"
          margin="100px auto"
          bg="#fff"
          padding="20px"
        >
          <Text bold font="Hardworking" size="60px" is_center>
            Sign up
          </Text>
          <Input placeholder="아이디를 입력하세요" />
          <Input placeholder="닉네임을 입력하세요" />
          <Input placeholder="비밀번호를 입력하세요" />
          <Input placeholder="비밀번호를 다시 입력하세요" />
          <Button text="회원가입" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Signup;
