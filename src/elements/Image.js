import styled from 'styled-components';
import React from 'react';

const Image = (props) => {
  const { shape, src, width, height } = props;

  const styles = {
    src: src,
    width: width,
    height: height,
  };

  if (shape === 'circle') {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === 'rectangle') {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  return <React.Fragment></React.Fragment>;
};

Image.defaultProps = {
  shape: 'circle',
  src: 'http://storage.enuri.info/pic_upload/knowbox2/201909/0920148702019092563a27187-c035-40ef-9d20-10bbb9c08e1f.jpeg',
  height: '35px',
  width: '35px',
};

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url('${(props) => props.src}');
  background-size: cover;
`;

const ImageCircle = styled.div`
  width: ${(props) => props.width};
  min-width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;

  background-image: url('${(props) => props.src}');
  background-size: cover;
  margin: 4px;
`;

export default Image;
