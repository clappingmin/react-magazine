import React from 'react';

import Post from '../components/Post';
import { Button, Grid } from '../elements';

import Permit from '../shared/Permit';

import { history } from '../redux/configureStore';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';

function PostList(props) {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.user.user);

  React.useEffect(() => {
    if (post_list.length === 0) dispatch(postActions.getPostFB());
  }, []);

  return (
    <React.Fragment>
      <Grid padding={'100px 0'}>
        {/* 게시글 목록 가져오기 */}
        {post_list.map((p, idx) => {
          if (user_info && p.user_info.user_id === user_info.uid) {
            return (
              <Grid
                key={p.id}
                width="940px"
                min_width="485px"
                margin=" 0 auto 40px"
                bg="#fff"
                border="1px solid rgb(219,219,219)"
                padding="20px"
              >
                <Post {...p} is_me />
              </Grid>
            );
          }
          return (
            <Grid
              key={p.id}
              width="940px"
              min_width="485px"
              margin=" 0 auto 40px"
              bg="#fff"
              border="1px solid rgb(219,219,219)"
              padding="20px"
            >
              <Post {...p} />
            </Grid>
          );
        })}
      </Grid>

      {/* 게시글 작성 버튼 */}
      <Permit>
        <Grid is_fixed bottom="20px" right="20px">
          <Button
            width="50px"
            height="50px"
            is_circle
            size="50px"
            is_animation
            _onClick={() => {
              history.push('/write');
            }}
          >
            +
          </Button>
        </Grid>
      </Permit>
    </React.Fragment>
  );
}
export default PostList;
