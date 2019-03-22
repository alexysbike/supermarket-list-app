import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';
import garbageImg from '../../assets/imgs/garbage.png';

const ItemList = ({
  classes, item, index, onRemoveClick,
}) => (
  <div className={classes.listItem}>
    <span>{item}</span>
    <img
      className={classes.buttonImage}
      src={garbageImg}
      alt="trash"
      onClick={() => onRemoveClick(index)}
      role="presentation"
    />
  </div>
);

ItemList.propTypes = {
  classes: PropTypes.shape().isRequired,
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};

export default injectSheet(styles)(ItemList);
