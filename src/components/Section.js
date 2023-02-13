class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  };

  renderItems(items) {
    items.reverse().forEach(item => this.addItem(item));
  };

  addItem(element) {
    this._containerSelector.prepend(this._renderer(element));
  };
};

export { Section }