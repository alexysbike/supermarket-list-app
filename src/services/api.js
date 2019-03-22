const getItemsFromLocalStorage = () => {
  const items = localStorage.getItem('items');
  return items ? JSON.parse(items) : [];
};

class Api {
  static getAll() {
    return new Promise((resolve) => {
      const items = getItemsFromLocalStorage();
      // simulating api call delay
      setTimeout(() => resolve(items), 500);
    });
  }

  static add(item) {
    return new Promise((resolve) => {
      const items = getItemsFromLocalStorage();
      const newItems = [...items, item];
      localStorage.setItem('items', JSON.stringify(newItems));
      resolve(item);
    });
  }

  static remove(indexForRemove) {
    return new Promise((resolve) => {
      const items = getItemsFromLocalStorage();
      const newItems = items.filter((item, index) => index !== indexForRemove);
      localStorage.setItem('items', JSON.stringify(newItems));
      resolve(newItems);
    });
  }
}

export default Api;
