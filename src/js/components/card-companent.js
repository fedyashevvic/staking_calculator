const createElement = (template) => {
  const newEl = document.createElement(`div`);
  newEl.innerHTML = template;

  return newEl.firstChild;
};

export default class ItemAbstract {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    throw new Error('you need to determine this method...')
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}
