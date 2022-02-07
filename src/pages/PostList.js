import React from 'react';
import Post from '../components/Post';
import { Button, Grid } from '../elements';
import Header from '../components/Header';
import Permit from '../shared/Permit';
import { history } from '../redux/configureStore';

function PostList(props) {
  return (
    <React.Fragment>
      <Grid padding={'100px 0'}>
        <Grid
          width="940px"
          min_width="485px"
          margin="auto"
          bg="#fff"
          border="1px solid rgb(219,219,219)"
          padding="20px"
        >
          <Post />
        </Grid>
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
