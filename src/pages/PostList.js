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

  React.useEffect(() => {
    dispatch(postActions.getPostFB());
  }, []);

  return (
    <React.Fragment>
      <Grid padding={'100px 0'}>
        {post_list.map((p, idx) => {
          return (
            <Grid
              key={p.id}
              width="940px"
              min_width="485px"
              margin="auto"
              bg="#fff"
              border="1px solid rgb(219,219,219)"
              padding="20px"
            >
              <Post {...p} />
            </Grid>
          );
        })}
      </Grid>

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
