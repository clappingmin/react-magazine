import React from 'react';
import Post from '../components/Post';
import CommentList from '../components/CommentList';
import CommentWrite from '../components/CommentWrite';
import { Grid } from '../elements';

const PostDetail = (props) => {
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
          <Post />
          <CommentWrite />
          <CommentList />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PostDetail;
