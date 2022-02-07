import React from 'react';
import Header from '../components/Header';
import { Grid, Text, Input, Button } from '../elements';
import { deleteCookie, setCookie } from '../shared/Cookie';

import { actionCreators as userActions } from '../redux/modules/user'; // as : 별명 주는거
import { useDispatch } from 'react-redux';

function Login(props) {
  const dispatch = useDispatch();
  const [id, setId] = React.useState('');
  const [pwd, setPwd] = React.useState('');

  const changeId = (e) => {
    setId(e.target.value);
  };

  const changePwd = (e) => {
    setPwd(e.target.value);
  };

  const login = () => {
    if (id === '' || pwd === '') {
      window.alert('아이디 혹은 비밀번호가 공란입니다! 입력해주세요!');
      return;
    }

    dispatch(userActions.loginFB(id, pwd));
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
            _onChange={changeId}
            placeholder="아이디를 입력하세요"
          />
          <Input
            value={pwd}
            _onChange={changePwd}
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
          <Button
            text="로그인"
            _onClick={() => {
              console.log('로그인 했어~');
              login();
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Login;
