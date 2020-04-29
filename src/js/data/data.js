import {ItemTemplate} from "../components/card-companent.js";
import {renderElement} from "../utils/utils.js";

const containerEl = document.querySelector(`.s__app-body-container`);

const coins = ["Aion", "Algorand", "ChainX", "Cosmos", "Decred", "Elrond", "Energi", "Fantom", "ICON", "Komodo", "Livepeer", "Tezos", "TomoChain", "Veil", "Waves", "Zcoin"];
const rewards = [`5.72`, `5.45`, `95.13`, `8.2`, `8`, `32.90`, `15.23`, `38`, `15.73`, `5.1`, `41.95`, `5.72`, `5.17`, `25.58`, `5.6`, `24.29`];
const MIN_5 = 300000;

export default class DataModule {
  constructor() {
    this._localStorageData = localStorage.getItem(`coins`);
    this._localStorageTimestamp = localStorage.getItem(`timestamp`);
    this._returnData = false;
    this._data = [];
    this._promises = [];
  }
  renderData() {
    if (this._localStorageData && (Date.now() - this._localStorageTimestamp < MIN_5)) {
      this._data = this._getLocalStorageData();
      this._returnData = true;
    } else {
      coins.forEach((it) => {
        this._promises.push(new Promise((resolve, reject) => {
          fetch(`https://api.coingecko.com/api/v3/coins/${it.toLowerCase()}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
          .then(response => response.json())
          .then(json => {
            this._data.push(json);
            resolve();
          })
          .catch(err => console.error(err));
        }));
      });

      Promise.all(this._promises).then(() => {
        this._sortQueryData();
      })
      .then(() => {
        this._reWriteLocalStorage();
      })
      .then(() => this._returnData = true); 
    }
  }
  _getLocalStorageData() {
    return JSON.parse(this._localStorageData);
  }
  _sortQueryData() {
    this._data.sort((it, nextEl) => {
      if (it.name < nextEl.name) return -1;
    });
    for (let i = 0; i < this._data.length; i++) {
      this._data[i].stakingRate = rewards[i];
    }
  }
  _reWriteLocalStorage() {
    localStorage.clear();
    localStorage.setItem(`coins`, JSON.stringify(this._data));
    localStorage.setItem(`timestamp`, Date.now());
    this._localStorageData = localStorage.getItem(`coins`);
    this._localStorageTimestamp = localStorage.getItem(`timestamp`);
  }
  getData() {
    if (this._returnData) {
      return this._data;
    }
  }
};




// const openItemHandler = (evt) => {
//     const defaultOffset = 319;
//     const infoTabs = document.querySelectorAll(`.s__app-item-extrainfo`); 
//     const infoContainers = document.querySelectorAll(`.s__app-item-container`);
//     const element = evt.currentTarget;
//     const elementData = element.dataset.item;
//     const infoElement = document.querySelector(`#${elementData}`);
//     const arrowPosition = findOffset(element.offsetLeft);

//     infoTabs.forEach(it => {
//       it.classList.remove(`active`);
//     })
//     infoContainers.forEach(it => { 
//       it.style = `margin-bottom: ${50}px`;
//     })
//     const top = element.offsetTop;

//     if (!(currentItem === elementData)) {
//       currentItem = elementData;
  
//       infoElement.style.top = `${top + defaultOffset}px`;
//       infoElement.classList.add(`active`);
//       infoElement.classList.add(`s__app-arrow-${arrowPosition}`);
//       element.style = `margin-bottom: ${320}px`;
//     } else {
//       currentItem = null;
//     }
// };


// getPrices();