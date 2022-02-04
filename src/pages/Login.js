import React from 'react';
import Header from '../shared/Header';
import { Grid, Text, Input, Button } from '../elements';
import { deleteCookie, setCookie } from '../shared/Cookie';

function Login() {
  const [id, setId] = React.useState('');
  const [pwd, setPwd] = React.useState('');

  const changeId = (e) => {
    setId(e.target.value);
  };

  const changePwd = (e) => {
    setPwd(e.target.value);
  };

  const login = () => {
    setCookie('user_id', id, 3);
    setCookie('user_pwd', pwd, 3);
  };

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
            Log in
          </Text>
          <Input
            value={id}
            onChange={changeId}
            placeholder="아이디를 입력하세요"
          />
          <Input
            value={pwd}
            onChange={changePwd}
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
          <Button
            text="로그인"
            _onClick={() => {
              login();
              console.log('버튼이 눌렸다.');
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Login;
