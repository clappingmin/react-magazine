import React from 'react';
import { Grid, Text, Button, Image, Input } from '../elements';
import Upload from '../shared/Upload';

import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';
import { actionCreators as imageActions } from '../redux/modules/image';

const PostWrite = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.list);

  const post_id = props.match.params.id;
  const is_edit = post_id ? true : false;

  const { history } = props;

  let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;

  const [contents, setContents] = React.useState(_post ? _post.contents : '');

  React.useEffect(() => {
    if (is_edit && !_post) {
      console.log('포스트 정보가 없어요!');
      history.goBack();

      return;
    }

    if (is_edit) {
      dispatch(imageActions.setPreview(_post.image_url));
    }
  }, []);

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.addPostFB(contents));
  };

  const editPost = () => {
    dispatch(postActions.editPostFB(post_id, { contents: contents }));
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
          {is_edit ? (
            <Text bold font="Hardworking" size="60px" is_center>
              게시글 수정
            </Text>
          ) : (
            <Text bold font="Hardworking" size="60px" is_center>
              게시글 작성
            </Text>
          )}
          <Upload />

          <Grid margin="10px 0">
            <Text size="20px" bold>
              미리보기
            </Text>
            <Image
              shape="rectangle"
              src={preview ? preview : 'http://via.placeholder.com/400x300'}
            />
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
            {is_edit ? (
              <Button height="50px" size="30px" _onClick={editPost}>
                게시글 수정
              </Button>
            ) : (
              <Button height="50px" size="30px" _onClick={addPost}>
                게시글 작성
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
