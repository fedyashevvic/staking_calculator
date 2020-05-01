import DataModule from "../data/data.js"
import ItemTemplate from "../components/first-render-component.js";
import ItemCalcTemplate from "../components/if-only-component.js"
import {renderElement} from "../utils/utils.js";
import {openItemHandler, returnActiveCheckbox, getPreviousPeriodPrice, calculateStakingReward} from "../helpers.js";

const amountInput = document.querySelector(`.s__app-amount`);
const submitCulculatorButton = document.querySelector(`#calculate-button`);

const renderItems = (container, data) => {
  data.forEach(it => {
    const newItem = new ItemTemplate(it);
    renderElement(container, newItem.getElement());
    newItem.setClickEvent(openItemHandler);
  })
}

export default class AppController {
  constructor() {
    this._data = null;
    this._dataModule = new DataModule();
    this._container = document.querySelector(`.s__app-body-container`);
    this._preloader = document.querySelector(`#s__app-preloader`);
    this._renderedItems = [];
    this._calculatorClickHandler = this._calculatorClickHandler.bind(this);
    this._renderStartCards = this._renderStartCards.bind(this);
  }
  render() {
    this._dataModule.renderData(this._renderStartCards);
    if (submitCulculatorButton) { 
      submitCulculatorButton.addEventListener(`click`, this._calculatorClickHandler);
    }
  }
  setData() {
    this._data = this._dataModule.getData();
    if (!this._data) {
      setTimeout(() => {
        this.setData(); 
      }, 0);
    }

  }
  _renderStartCards(data) {
    this._data = data;
    renderItems(this._container, data);
    setTimeout (() => {
      this._preloader.classList.remove(`active`);
    }, 500);
  }
  _calculatorClickHandler() {
    const offset = document.querySelector(`.s__app-body`).offsetTop;
    const amount = parseFloat(amountInput.value);
    const period = returnActiveCheckbox();
    const currency = document.querySelector(`div[name="currency"]`).getAttribute(`value`);

    if (amount && period && currency) {
      this._container.innerHTML = ``;
      this._data.forEach(it => {
        const itInterest = parseFloat(it.stakingRate);
        const previousPrice = getPreviousPeriodPrice(it, currency, period.value);
        const itAmount = amount / previousPrice;
        const itReward = calculateStakingReward(itAmount, period.value, itInterest);
        const itCoinReward = (((itReward + itAmount) * it.market_data.current_price[currency]) - amount).toFixed(4);
        const rewardInPercent = (itInterest * (parseInt(period.valueInNum, 10) / 365)).toFixed(3);
        const itCoinRewardInPercent = (itCoinReward * 100 / amount).toFixed(4);

        const newItem = new ItemCalcTemplate(it, itReward, rewardInPercent, itCoinReward, itCoinRewardInPercent, currency)
        this._renderedItems.push(newItem);
        renderElement(this._container, newItem.getElement());
        newItem.getElement().addEventListener(`click`, openItemHandler);
      })
      window.scrollTo({
        top: offset,
        behavior: `smooth`
      });
    }
  }
}