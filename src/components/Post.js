import React from 'react';

import { Grid, Image, Text } from '../elements';

const Post = (props) => {
  return (
    <React.Fragment>
      {/* <div>user profile / user name / insert_dt /is_me(edit btn) </div>
      <div>contents</div>
      <div>comment cnt</div> */}
      <Grid width="940px" min_width="485px" margin="auto" bg="#fff">
        <Grid is_flex>
          <Image shape="circle" src={props.src} width="35px" height="35px" />
          <Text bold>{props.user_info.user_name}</Text>
          <Text>{props.insert_dt}</Text>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.src}></Image>
        </Grid>
        <Grid padding="16px">
          <Text bold>댓글 {props.comment_cnt}개</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: 'guest',
    user_profile:
      'http://storage.enuri.info/pic_upload/knowbox2/201909/0920148702019092563a27187-c035-40ef-9d20-10bbb9c08e1f.jpeg',
  },
  image_url:
    'http://storage.enuri.info/pic_upload/knowbox2/201909/0920148702019092563a27187-c035-40ef-9d20-10bbb9c08e1f.jpeg',
  contents: '뚱랑이',
  comment_cnt: 0,
  insert_dt: '2022-01-01 00:00:00',
};

export default Post;
