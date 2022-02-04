import React from 'react';
import { Grid, Text, Input, Button } from '../elements';

function SignupForm() {
  return (
    <React.Fragment>
      <Grid
        border="1px solid rgb(219, 219, 219)"
        width="485px"
        margin="50px auto"
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
    </React.Fragment>
  );
}
export default SignupForm;
