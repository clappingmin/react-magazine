import React from 'react';
import { Grid, Text, Button, Image, Input } from '../elements';
import Upload from '../shared/Upload';

const PostWrite = (props) => {
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
            <Input label="게시글 내용" placeholder="게시글 작성" multiLine />
          </Grid>

          <Grid>
            <Button height="50px" size="30px">
              게시글 작성
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
