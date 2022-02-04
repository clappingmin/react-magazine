import { useEffect, useState } from 'react';
import { Grid, Image, Button } from '../elements';
import styled from 'styled-components';
import { getCookie, deleteCookie } from '../shared/Cookie';

function Header(props) {
  const [is_login, setIsLogin] = useState(false);

  useEffect(() => {
    let cookie = getCookie('user_id');
    console.log('쿠키에 저장된 아이디는 ' + cookie);

    if (cookie) setIsLogin(true);
    else setIsLogin(false);
  });

  if (is_login) {
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
          <Image shape="circle" src="img/logo2.png" width="100px" />

          <Grid is_flex min_width="225px" margin="0 20px">
            <Button text="내 정보" size="70px" />
            <Button text="알림" size="70px" />
            <Button
              text="로그아웃"
              size="70px"
              _onClick={() => {
                deleteCookie('user_id');
              }}
            />
          </Grid>
        </Grid>
      </HeaderBox>
    );
  } else {
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
          <Image shape="circle" src="img/logo2.png" width="100px" />
          <Grid is_flex min_width="150px" margin="0 20px">
            <Button text="회원가입" size="70px" />
            <Button text="로그인" size="70px" />
          </Grid>
        </Grid>
      </HeaderBox>
    );
  }
}

const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
export default Header;
