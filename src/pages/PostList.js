import React from 'react';
import Post from '../components/Post';
import { Button, Grid } from '../elements';
import Header from '../components/Header';
import Permit from '../shared/Permit';

function PostList(props) {
  return (
    <React.Fragment>
      <Grid padding={'100px 0'}>
        <Post />
      </Grid>
      <Permit>
        <Grid is_fixed bottom="20px" right="20px">
          <Button width="50px" height="50px" is_circle size="50px" is_animation>
            +
          </Button>
        </Grid>
      </Permit>
    </React.Fragment>
  );
}
export default PostList;
