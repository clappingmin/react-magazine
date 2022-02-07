import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
  const {
    is_fixed,
    is_flex,
    width,
    min_width,
    height,
    margin,
    padding,
    bg,
    children,
    border,
    bottom,
    right,
  } = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    min_width: min_width,
    margin: margin,
    padding: padding,
    bg: bg,
    border: border,
    height: height,
    is_fixed,
    bottom,
    right,
  };

  return (
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  width: '100%',
  height: 'auto',
  min_width: null,
  padding: false,
  margin: false,
  bg: false,
  border: null,
  is_fixed: false,
  bottom: 0,
  right: 0,
};

const GridBox = styled.div`
  height: ${(props) => props.height};
  box-sizing: border-box;
  max-width: ${(props) => props.width};
  ${(props) => (props.min_width ? `min-width: ${props.min_width}` : '')};
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : '')};
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ''};
  ${(props) => (props.border ? `border: ${props.border};` : '')}
  border-radius: 2px;

  ${(props) =>
    props.is_fixed
      ? `  position: fixed; bottom: ${props.bottom}; right: ${props.right};`
      : ''}
`;

export default Grid;
