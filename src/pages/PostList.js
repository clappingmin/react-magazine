import React from 'react';
import Post from '../components/Post';
import { Grid } from '../elements';
import Header from '../shared/Header';

function PostList(props) {
  return (
    <React.Fragment>
      <Grid bg="rgb(250, 250, 250)">
        <Header is_Login />
        <Post />
      </Grid>
    </React.Fragment>
  );
}
export default PostList;
