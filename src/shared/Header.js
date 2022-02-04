import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image, Button } from '../elements';
import styled from 'styled-components';

function Header(props) {
  const { is_Login } = props;

  if (is_Login)
    return (
      <HeaderBox>
        <Grid
          is_flex
          width="100vw"
          min_width="100vw"
          padding="10px"
          bg="#fff"
          border="1px solid rgb(219,219,219)"
        >
          <Link to="/">
            <Image shape="circle" src="img/logo2.png" width="100px" />
          </Link>

          <Grid is_flex min_width="225px" margin="0 20px">
            <Link to="#">
              <Button text="내 정보" size="70px" />
            </Link>
            <Link to="#">
              <Button text="알림" size="70px" />
            </Link>
            <Link to="/login">
              <Button text="로그아웃" size="70px" />
            </Link>
          </Grid>
        </Grid>
      </HeaderBox>
    );
  else
    return (
      <HeaderBox>
        <Grid
          is_flex
          width="100vw"
          min_width="100vw"
          padding="10px"
          bg="#fff"
          border="1px solid rgb(219,219,219)"
        >
          <Link to="/">
            <Image shape="circle" src="img/logo2.png" width="100px" />
          </Link>
          <Grid is_flex min_width="150px" margin="0 20px">
            <Link to="/signup">
              <Button text="회원가입" size="70px" />
            </Link>
            <Link to="/login">
              <Button text="로그인" size="70px" />
            </Link>
          </Grid>
        </Grid>
      </HeaderBox>
    );
}

const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
export default Header;
