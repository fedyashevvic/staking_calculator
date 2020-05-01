export default class Selector {
  constructor() {
    this._isOpened = false;
  }
  renderSelector() {
    const selectorMainEl = document.querySelector(`div[name="currency"]`);
    const selectorNav = document.querySelector(`.s__app-calc-currency`);

    if (selectorMainEl) {
      const closeSelectorHandler = () => {
        this._isOpened = false;
        selectorNav.classList.add(`hidden`);
        document.removeEventListener(`click`, closeSelectorHandler);
        document.removeEventListener(`keydown`, closeSelectorHandler);
      }
      const openSelectorHandler = () => {
        this._isOpened = !this._isOpened;
        selectorNav.classList.remove(`hidden`);
        setTimeout(() => {
          document.addEventListener(`click`, closeSelectorHandler);
          document.addEventListener(`keydown`, closeSelectorHandler);
        }, 0);
      }
      const chooseOptionhandler = (evt) => {
        const target = evt.target;
        const value = target.getAttribute(`value`);
        selectorMainEl.setAttribute(`value`, value);
        selectorMainEl.textContent = value.toUpperCase();
        closeSelectorHandler();
      }
      
      selectorMainEl.addEventListener(`click`, openSelectorHandler);
      selectorNav.addEventListener(`click`, chooseOptionhandler);
    }
  }
}
