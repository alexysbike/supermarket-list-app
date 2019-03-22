import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Button from '../Button';
import styles from './styles';

class NewItemModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onCancelButtonClick = this.onCancelButtonClick.bind(this);
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
  }

  onInputChange({ target: { value: newItem } }) {
    this.setState({ newItem });
  }

  onCancelButtonClick() {
    const { onCancel } = this.props;
    this.setState({ newItem: '' });
    if (onCancel) {
      onCancel();
    }
  }

  onAddButtonClick() {
    const { newItem } = this.state;
    const { onSave } = this.props;
    if (onSave && newItem) {
      onSave(newItem);
      this.setState({ newItem: '' });
    }
  }

  render() {
    const { isOpen, classes } = this.props;
    const { newItem } = this.state;
    return (!isOpen ? null : (
      <div className={classes.wrapper}>
        <div className={classes.modal}>
          <h2 className={classes.title}>Add Modal</h2>
          <div>
            <input type="text" className={classes.textInput} value={newItem} onChange={this.onInputChange} />
          </div>
          <div className={classes.actionWrapper}>
            <Button
              onClick={this.onCancelButtonClick}
              text="Cancel"
            />
            <Button
              onClick={this.onAddButtonClick}
              text="Add"
              variant="primary"
              disabled={!newItem}
            />
          </div>
        </div>
      </div>
    ));
  }
}

NewItemModal.propTypes = {
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
  isOpen: PropTypes.bool,
  classes: PropTypes.shape().isRequired,
};

NewItemModal.defaultProps = {
  isOpen: false,
  onCancel: null,
  onSave: null,
};

export default injectSheet(styles)(NewItemModal);
