/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

const Button = ({
  text, classes, onClick, disabled,
}) => (
  <button
    type="button"
    className={[classes.button, classes.buttonHover].join(' ')}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.node,
  classes: PropTypes.shape().isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
};

const dummyFunc = () => {};
Button.defaultProps = {
  text: null,
  onClick: dummyFunc,
  variant: 'default',
  block: false,
  disabled: false,
};

export default injectSheet(styles)(Button);
