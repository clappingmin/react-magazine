import React from 'react';
import styled from 'styled-components';

function Button(props) {
  const { size, text, bg, _onClick } = props;

  const styles = {
    size,
    text,
    bg,
  };

  return (
    <Btn {...styles} onClick={_onClick}>
      {text}
    </Btn>
  );
}

Button.defaultProps = {
  size: '100%',
  text: '버튼',
  bg: 'rgb(246,200,73)',
  _onClick: () => {},
};

const Btn = styled.button`
  width: ${(props) => props.size};
  background-color: ${(props) => props.bg};
  border: none;
  height: 30px;
  border-radius: 5px;
  color: #fff;
  font-weight: 900;
  margin: 5px 0;
`;
export default Button;
