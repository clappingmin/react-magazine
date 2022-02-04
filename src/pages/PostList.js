import React from 'react';
import Post from '../components/Post';
import { Grid } from '../elements';
import Header from '../shared/Header';

function PostList(props) {
  return (
    <React.Fragment>
      <Grid bg="rgb(250, 250, 250)">
        <Header is_Login />
        <Grid padding={'100px 0'}>
          <Post />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default PostList;
