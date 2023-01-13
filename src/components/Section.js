class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  };

  renderItems() {
    this._items.forEach(item => this.addItem(item));
  };

  addItem(element) {
    const card = this._renderer(element)
    this._containerSelector.append(card);
  };
};

export { Section }