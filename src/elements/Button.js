import React from 'react';
import styled from 'styled-components';

function Button(props) {
  const {
    width,
    height,
    children,
    bg,
    _onClick,
    is_circle,
    size,
    is_animation,
  } = props;

  const styles = {
    width,
    height,
    bg,
    is_circle,
    size,
    is_animation,
  };

  return (
    <Btn {...styles} onClick={_onClick}>
      {children}
    </Btn>
  );
}

Button.defaultProps = {
  width: '100%',
  height: '30px',
  text: '버튼',
  bg: '#FEBD1A',
  _onClick: () => {},
  is_circle: null,
  size: '14px',
  is_animation: null,
};

const Btn = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bg};
  border: none;
  color: #fff;
  font-weight: 900;
  margin: 5px 0;
  ${(props) =>
    props.is_circle ? `border-radius: 50%;` : `border-radius: 5px;`}
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.size};
  ${(props) =>
    props.is_animation
      ? `
  transition-duration: 0.5s;
  &:hover {
    transform: rotate(180deg);
  }
  `
      : ''};
`;
export default Button;
