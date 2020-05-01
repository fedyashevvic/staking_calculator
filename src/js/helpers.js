let currentItem;
const monthInputs = document.querySelectorAll(`input[name="month"]`);

const findOffset = (offset) => {
  if (offset > 900) {
    return 4;
  } else if (offset > 600) {
    return 3;
  } else if (offset > 300) {
    return 2;
  }
  return 1;
}
const labelButtons = document.querySelectorAll(`label .s__app-button`);
const periodSelectorHandler = (evt) => {
  labelButtons.forEach(it => {
    it.classList.remove(`active-button`);
  })
  evt.currentTarget.classList.add(`active-button`);
};
labelButtons.forEach(it => {
  it.addEventListener(`click`, periodSelectorHandler);
})
const openItemHandler = (evt) => {
  const defaultOffset = 319;
  const infoTabs = document.querySelectorAll(`.s__app-item-extrainfo`); 
  const infoContainers = document.querySelectorAll(`.s__app-item-container`);
  const element = evt.currentTarget;
  const elementData = element.dataset.item;
  const infoElement = document.querySelector(`#${elementData}`);
  const arrowPosition = findOffset(element.offsetLeft);

  infoTabs.forEach(it => {
    it.classList.remove(`active`);
  })
  infoContainers.forEach(it => { 
    it.style = `margin-bottom: 50px`;
  })
  const top = element.offsetTop;
  const margin = infoElement.offsetHeight;

  if (!(currentItem === elementData)) {
    currentItem = elementData;

    infoElement.style.top = `${top + defaultOffset}px`;
    infoElement.classList.add(`active`);
    infoElement.classList.add(`s__app-arrow-${arrowPosition}`);
    element.style = `margin-bottom: 320px`;
  } else {
    currentItem = null;
  }
};
const calculateStakingReward = (amount, period, interest) => {
  switch (period) {
    case `price_change_percentage_30d_in_currency`:
      return amount/100 * interest * 30/365;
    case `price_change_percentage_60d_in_currency`:
      return amount/100 * interest * 60/365;
    case `price_change_percentage_200d_in_currency`:
      return amount/100 * interest * 200/365;
  }
}
const returnActiveCheckbox = () => {
  let checkedEl = { };
  monthInputs.forEach(it => {
    if (it.checked) {
      checkedEl.value = it.value;
      checkedEl.valueInNum = it.getAttribute(`data-period`);
    }
  }); 
  return checkedEl;
}

const getPreviousPeriodPrice = (coin, asset, period) => {
  return ((coin.market_data.current_price[asset] * 100) / (100 + coin.market_data[period][asset]));
};
export {openItemHandler, returnActiveCheckbox, getPreviousPeriodPrice, calculateStakingReward};