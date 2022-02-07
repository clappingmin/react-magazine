import React from 'react';
import { Grid, Text, Button, Image, Input } from '../elements';
import Upload from '../shared/Upload';

import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';

const PostWrite = (props) => {
  const is_login = useSelector((state) => state.user.is_login);
  const { history } = props;

  const dispatch = useDispatch();
  const [contents, setContents] = React.useState('');

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.addPostFB(contents));
    history.push('/');
  };

  if (!is_login) {
    return (
      <Grid padding="100px 0px" center>
        <Grid
          width="485px"
          min_width="485px"
          margin="auto"
          bg="#fff"
          border="1px solid rgb(219,219,219)"
          padding="20px"
        >
          <Text size="32px" bold font="Hardworking">
            앗! 잠깐!
          </Text>
          <Text size="16px">로그인 후에만 글을 쓸 수 있어요!</Text>
          <Button
            _onClick={() => {
              history.replace('/login');
            }}
          >
            로그인하러 가기
          </Button>
        </Grid>
      </Grid>
    );
  }
  return (
    <React.Fragment>
      <Grid padding="100px 0">
        <Grid
          width="940px"
          min_width="485px"
          margin="auto"
          bg="#fff"
          border="1px solid rgb(219,219,219)"
          padding="20px"
        >
          <Text bold font="Hardworking" size="60px" is_center>
            게시글 작성
          </Text>
          <Upload />

          <Grid margin="10px 0">
            <Text size="20px" bold>
              미리보기
            </Text>
            <Image shape="rectangle" />
          </Grid>

          <Grid margin="30px 0">
            <Input
              _onChange={changeContents}
              label="게시글 내용"
              placeholder="게시글 작성"
              multiLine
            />
          </Grid>

          <Grid>
            <Button height="50px" size="30px" _onClick={addPost}>
              게시글 작성
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
