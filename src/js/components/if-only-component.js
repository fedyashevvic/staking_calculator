import ItemAbstract from "./card-companent.js";


// const offset = document.querySelector(`.s__app-body`).offsetTop;
const getCalcItemTemplate = (data, profitInCoin, changeInPercent, profitInBasic, changeXinPercent, currency) => {
  return (
    `<section class="s__app-item-container" data-item="${data.name}">
      <div class="s__app-item">
        <img src="${data.image.large}" alt="${data.name}">
        <h4 class="s__app-item-title">${data.name}</h4>
        <p class="s__app-item-subtitle">${profitInCoin} ${data.symbol.toUpperCase()}</p>
        <p class="s__app-item-subtitle ${profitInBasic > 0 ? `green` : `red`}">${currency === `usd` ? `$` : ``} ${profitInBasic} ${currency !== `usd` ? currency.toUpperCase() : ``}</p>
      </div>
      <div class="s__app-item-extrainfo" id="${data.name}">
        <div class="s__app-extra-main">
          <div class="s__app-extra-icon">
            <img src="${data.image.large}" alt="${data.name}">
            <div class="s__app-extra-title">${data.name}</div>
          </div>
          <div class="s__app-extra-description">The <span>${data.name}</span> market cap is <span>$ ${data.market_data.market_cap.usd}</span> and the 24h volume is <span>${data.market_data.total_volume.usd}</span>. </div>
      </div>
      <div class="s_app_income">
        <div class="s__app-extra-interest">${profitInCoin > 0 ? `+` : ``}${profitInCoin} ${data.symbol.toUpperCase()} <span class="${profitInCoin > 0 ? `green` : `red`}">(${changeInPercent}%)</span></div>
        <div class="s__app-extra-price">${profitInBasic > 0 ? `+` : ``}${profitInBasic} ${currency.toUpperCase()} <span class="${profitInBasic > 0 ? `green` : `red`}">(${changeXinPercent}%)</span></div>
      </div>
    <section>`
  );
};

const Condition = {
  DEFAULT: `default`,
  OPENED: `opened`
}

export default class ItemCalcTemplate extends ItemAbstract {
  constructor(itemData, profitInCoin, changeInPercent, profitInBasic, changeXinPercent, currency) {
    super();
    this._itemData = itemData;
    this._profitInCoin = profitInCoin;
    this._changeInPercent = changeInPercent;
    this._profitInBasic = profitInBasic;
    this._changeXinPercent = changeXinPercent;
    this._currency = currency;
    this._condition = Condition.DEFAULT;
  }
  getTemplate() {
    return getCalcItemTemplate(this._itemData, this._profitInCoin, this._changeInPercent, this._profitInBasic, this._changeXinPercent, this._currency);
  }
  setClickListener() {
    this.getElement().addEventListener(`click`, _openExtraInfo);
  }
  _openExtraInfo() {
    this._condition = Condition.OPENED;
    this.getElement().querySelector(`.s__app-item-extrainfo`).classlist.add(`active`);
  }
}