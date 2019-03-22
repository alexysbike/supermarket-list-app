import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import ItemList from '../ItemList';
import NewItemModal from '../NewItemModal';
import Button from '../Button';
import Api from '../../services/api';
import styles from './styles';

const getSummaryMessage = (items = []) => (items.length === 1 ? `${items.length} ITEM` : `${items.length} ITEMS`);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
      modalOpen: false,
    };

    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.onModalCancel = this.onModalCancel.bind(this);
    this.onModalSave = this.onModalSave.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  async componentDidMount() {
    const items = await Api.getAll();
    this.setState({ items, loading: false });
  }

  onAddButtonClick() {
    this.setState({ modalOpen: true });
  }

  onModalCancel() {
    this.setState({ modalOpen: false });
  }

  async onModalSave(newItem) {
    const { items: oldItems } = this.state;
    await Api.add(newItem);
    const items = [...oldItems, newItem];
    this.setState({ modalOpen: false, items });
  }

  async removeItem(indexForRemove) {
    await Api.remove(indexForRemove);
    const { items: oldItems } = this.state;
    const items = oldItems.filter((item, index) => index !== indexForRemove);
    this.setState({ items });
  }

  render() {
    const {
      items, loading, newItem, modalOpen,
    } = this.state;
    const { classes } = this.props;
    const listElements = !items.length ? (
      <div>List is empty</div>
    ) : (
      items.map((item, index) => (
        <ItemList
          key={item}
          item={item}
          index={index}
          onRemoveClick={this.removeItem}
        />
      ))
    );
    return (
      <div className={classes.main}>
        <div className={classes.wrapper}>
          <h1 className={classes.title}>Supermarket List</h1>
          <h4 className={classes.subtitle}>
            {loading ? 'Loading...' : getSummaryMessage(items)}
          </h4>
          {!loading && (
            <>
              {listElements}
              <Button
                text="Add Item"
                block
                variant="primary"
                onClick={this.onAddButtonClick}
              />
            </>
          )}
        </div>
        <NewItemModal
          isOpen={modalOpen}
          newItem={newItem}
          onCancel={this.onModalCancel}
          onSave={this.onModalSave}
          onNewItemChange={this.onInputChange}
        />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default injectSheet(styles)(App);
