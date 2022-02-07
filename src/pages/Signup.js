import React from 'react';
import Header from '../components/Header';
import { Grid, Text, Input, Button } from '../elements';

import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

function Signup(props) {
  const dispatch = useDispatch();

  const [id, setId] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const [pwd_check, setPwdCheck] = React.useState('');
  const [user_name, setUserName] = React.useState('');

  const signup = () => {
    if (id === '' || pwd === '' || user_name === '') {
      alert('모든 칸을 입력해주세요.');
      return;
    }

    if (pwd !== pwd_check) {
      alert('비밀번호가 비밀번호 확인과 다릅니다. 다시 입력해주세요.');
      return;
    }
    dispatch(userActions.signupFB(id, pwd, user_name));
  };

  return (
    <React.Fragment>
      <Grid height="100vh" is_fixed min_width="100vw" bg="rgb(250,250,250)">
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
          <Input
            placeholder="아이디를 입력하세요"
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <Input
            placeholder="닉네임을 입력하세요"
            _onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <Input
            placeholder="비밀번호를 입력하세요"
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
          <Input
            placeholder="비밀번호를 다시 입력하세요"
            type="password"
            _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
          <Button _onClick={signup}>회원가입</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Signup.defaultProps = {};

export default Signup;
