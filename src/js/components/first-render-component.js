import ItemAbstract from "./card-companent.js";

const getItemTemplate = (data) => {
  return (
    `<section class="s__app-item-container" data-item="${data.name}">
        <div class="s__app-item">
          <img src="${data.image.large}" alt="${data.name}">
          <h4 class="s__app-item-title">${data.name}</h4>
          <p class="s__app-item-subtitle">${data.stakingRate} %</p>
        </div>
        <div class="s__app-item-extrainfo" id="${data.name}">
          <div class="s__app-extra-main">
            <div class="s__app-extra-icon">
              <img src="${data.image.large}" alt="${data.name}">
              <div class="s__app-extra-title">${data.name}</div>
            </div>
            <div class="s__app-extra-interest">≈ ${data.stakingRate} %</div>
            <div class="s__app-extra-price">$ ${data.market_data.current_price.usd}</div>
          </div>
          <div class="s__app-extra-sub">
            <div class="s__app-extra-description">The <span>${data.name}</span> market cap is <span>$ ${data.market_data.market_cap.usd}</span> and the 24h volume is <span>${data.market_data.total_volume.usd}</span>. </div>
            <a href="./calculator.html" class="s__app-extra-button">Calculate</a>
          </div>
        </div>
      <section>`
  );
};

export default class ItemTemplate extends ItemAbstract {
  constructor(itemData) {
    super();
    this._itemData = itemData;
  }
  getTemplate() {
    return getItemTemplate(this._itemData);
  }
  setClickEvent(cb) {
    this.getElement().addEventListener(`click`, cb);
  }
}