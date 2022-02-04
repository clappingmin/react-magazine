import React from 'react';
import styled from 'styled-components';

function Input(props) {
  const { placeholder } = props;

  Input.defaultProps = {
    placeholder: '',
  };

  return <InputBox placeholder={placeholder} />;
}

const InputBox = styled.input`
  border-radius: 5px;
  width: 100%;
  height: 40px;
  margin: 5px 0;
  background: rgb(250, 250, 250);
  border: 1px solid rgb(219, 219, 219);
  padding: 0 10px;
`;

export default Input;
