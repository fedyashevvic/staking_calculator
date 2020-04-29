/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/card-companent.js":
/*!*******************************!*\
  !*** ./src/card-companent.js ***!
  \*******************************/
/*! exports provided: ItemTemplate, ItemCalcTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ItemTemplate\", function() { return ItemTemplate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ItemCalcTemplate\", function() { return ItemCalcTemplate; });\nconst createElement = (template) => {\n  const newEl = document.createElement(`div`);\n  newEl.innerHTML = template;\n\n  return newEl.firstChild;\n};\n\n\nconst getItemTemplate = (img, title, interest) => {\n  return (\n    `<section class=\"s__app-item-container\" data-item=\"${title}\">\n        <div class=\"s__app-item\">\n          <img src=\"${img}\" alt=\"${title}\">\n          <h4 class=\"s__app-item-title\">${title}</h4>\n          <p class=\"s__app-item-subtitle\">${interest} %</p>\n        </div>\n        <div class=\"s__app-item-extrainfo\" id=\"${title}\">\n          <p>${title}</p>\n          <p>${title}</p>\n          <p>${interest}</p>\n        </div>\n      <section>`\n  );\n};\n\nconst getCalcItemTemplate = (img, title, ticker, profitInCoin, profitInBasic) => {\n  return (\n    `<section class=\"s__app-item-container\" data-item=\"${title}\">\n      <div class=\"s__app-item\">\n        <img src=\"${img}\" alt=\"${title}\">\n        <h4 class=\"s__app-item-title\">${title}</h4>\n        <p class=\"s__app-item-subtitle\">${profitInCoin} ${ticker}</p>\n        <p class=\"s__app-item-subtitle\">$ ${profitInBasic}</p>\n      </div>\n      <div class=\"s__app-item-extrainfo\" id=\"${title}\">\n        <p>${title}</p>\n        <p>${profitInCoin} ${ticker}</p>\n        <p>${profitInBasic}</p>\n      </div>\n    <section>`\n  );\n};\n\nclass ItemAbstract {\n  constructor(img, title) {\n    this._image = img;\n    this._title = title;\n    this._element = null;\n  }\n  getTemplate() {\n  }\n  getElement() {\n    if (!this._element) {\n      this._element = createElement(this.getTemplate());\n    }\n    return this._element;\n  }\n  removeElement() {\n    this._element = null;\n  }\n}\n\nclass ItemTemplate extends ItemAbstract {\n  constructor(img, title, int) {\n    super(img, title)\n    this._interest = int;\n  }\n  getTemplate() {\n    return getItemTemplate(this._image, this._title, this._interest);\n  }\n}\n\nclass ItemCalcTemplate extends ItemAbstract {\n  constructor(img, title, ticker, profitInCoin, profitInBasic) {\n    super(img, title)\n    this._ticker = ticker;\n    this._profitInCoin = profitInCoin;\n    this._profitInBasic = profitInBasic;\n  }\n  getTemplate() {\n    return getCalcItemTemplate(this._image, this._title, this._ticker, this._profitInCoin, this._profitInBasic);\n  }\n}\n\n//# sourceURL=webpack:///./src/card-companent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _card_companent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-companent.js */ \"./src/card-companent.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n \n\nconst coins = [\"Aion\", \"Algorand\", \"ChainX\", \"Cosmos\", \"Decred\", \"Elrond\", \"Energi\", \"Fantom\", \"ICON\", \"Komodo\", \"Livepeer\", \"Tezos\", \"TomoChain\", \"Veil\", \"Waves\", \"Zcoin\"];\nconst rewards = [`5.72`, `5.45`, `95.13`, `8.2`, `8`, `32.90`, `15.23`, `38`, `15.73`, `5.1`, `41.95`, `5.72`, `5.17`, `25.58`, `5.6`, `24.29`];\nlet data = [];\nconst containerEl = document.querySelector(`.s__app-body-container`);\nconst preloader = document.querySelector(`#s__app-preloader`);\n\nlet currentItem;\n\nconst renderElement = (container, element) => {\n  container.append(element);\n}\n\nconst findOffset = (offset) => {\n  if (offset > 900) {\n    return 4;\n  } else if (offset > 600) {\n    return 3;\n  } else if (offset > 300) {\n    return 2;\n  }\n  return 1;\n}\nconst openItemHandler = (evt) => {\n    const defaultOffset = 319;\n    const infoTabs = document.querySelectorAll(`.s__app-item-extrainfo`); \n    const infoContainers = document.querySelectorAll(`.s__app-item-container`);\n    const element = evt.currentTarget;\n    const elementData = element.dataset.item;\n    const infoElement = document.querySelector(`#${elementData}`);\n    const arrowPosition = findOffset(element.offsetLeft);\n\n    infoTabs.forEach(it => {\n      it.classList.remove(`active`);\n    })\n    infoContainers.forEach(it => { \n      it.style = `margin-bottom: ${50}px`;\n    })\n    const top = element.offsetTop;\n\n    if (!(currentItem === elementData)) {\n      currentItem = elementData;\n  \n      infoElement.style.top = `${top + defaultOffset}px`;\n      infoElement.classList.add(`active`);\n      infoElement.classList.add(`s__app-arrow-${arrowPosition}`);\n      element.style = `margin-bottom: ${200}px`;\n    } else {\n      currentItem = null;\n    }\n};\n\nfunction getPrices() {\n  let promices = [];\n  let template = ``; \n  \n    coins.forEach((it) => {\n      promices.push(new Promise((resolve, reject) => {\n        fetch(`https://api.coingecko.com/api/v3/coins/${it.toLowerCase()}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)\n        .then(response => response.json())\n        .then(json => {\n          data.push(json);\n          resolve();\n        })\n        .catch(err => console.error(err));\n      }));\n    });\n\n    Promise.all(promices).then(() => {\n      data.sort((it, nextEl) => {\n        if (it.name < nextEl.name) return -1;\n      });\n      for (let i = 0; i < data.length; i++) {\n        data[i].stakingRate = rewards[i];\n      }\n\n      data.forEach(it => {\n        const newItem = new _card_companent_js__WEBPACK_IMPORTED_MODULE_0__[\"ItemTemplate\"](it.image.large, it.name, it.stakingRate);\n        renderElement(containerEl, newItem.getElement());\n        newItem.getElement().addEventListener(`click`, openItemHandler);\n      })\n      setTimeout (() => {\n        preloader.classList.remove(`active`);\n      }, 500);\n    }); \n};\ngetPrices();\n\n\nconst labelButtons = document.querySelectorAll(`label .s__app-button`);\nlet currentCheckedPeriod = 0;\nconst periodSelectorHandler = (evt) => {\n  labelButtons.forEach(it => {\n    it.classList.remove(`active-button`);\n  })\n  evt.currentTarget.classList.add(`active-button`);\n};\n\nlabelButtons.forEach(it => {\n  it.addEventListener(`click`, periodSelectorHandler);\n})\n\nconst infoTabs = document.querySelectorAll(`.s__app-item`);\nconst amountInput = document.querySelector(`.s__app-amount`);\nconst monthInputs = document.querySelectorAll(`input[name=\"month\"]`);\nconst submitCulculatorButton = document.querySelector(`#calculate-button`);\n\nconst calculateStakingReward = (amount, period, interest) => {\n  return (amount/100 * interest * period/12);\n}\nconst returnActiveCheckbox = () => {\n  let checkedEl = 0;\n  monthInputs.forEach(it => {\n    if (it.checked) checkedEl = it.value; \n  }); \n  return checkedEl;\n\n}\nconst calcylatorHandler = () => {\n  const offset = document.querySelector(`.s__app-body`).offsetTop;\n  const amount = parseFloat(amountInput.value);\n  const period = parseFloat(returnActiveCheckbox());\n  const currency = document.querySelector(`div[name=\"currency\"]`).getAttribute(`value`);\n\n  if (offset && amount && period) {\n    containerEl.innerHTML = ``;\n    data.forEach(it => {\n      const itInterest = parseFloat(it.stakingRate);\n      const itAmount = amount / parseFloat(it.market_data.current_price[currency]);\n      const itReward = calculateStakingReward(itAmount, period, itInterest).toFixed(4);\n      const itUsdReward = parseFloat(itReward * parseFloat(it.market_data.current_price[currency])).toFixed(4);\n\n      const newItem = new _card_companent_js__WEBPACK_IMPORTED_MODULE_0__[\"ItemCalcTemplate\"](it.image.large, it.name, it.symbol.toUpperCase(), itReward, itUsdReward);\n      renderElement(containerEl, newItem.getElement());\n      newItem.getElement().addEventListener(`click`, openItemHandler);\n    })\n    window.scrollTo({\n      top: offset,\n      behavior: `smooth`\n    });\n  }\n  \n}\n\nsubmitCulculatorButton.addEventListener(`click`, calcylatorHandler);\n\n\n\n// selector\n\nconst selectorMainEl = document.querySelector(`div[name=\"currency\"]`);\nconst selectorNav = document.querySelector(`.s__app-calc-currency`);\nlet isOpened = false;\n\nconst closeSelectorHandler = () => {\n  isOpened = false;\n  selectorNav.classList.add(`hidden`);\n  document.removeEventListener(`click`, closeSelectorHandler);\n  document.removeEventListener(`keydown`, closeSelectorHandler);\n}\nconst openSelectorHandler = () => {\n  isOpened = !isOpened;\n  selectorNav.classList.remove(`hidden`);\n  setTimeout(() => {\n    document.addEventListener(`click`, closeSelectorHandler);\n    document.addEventListener(`keydown`, closeSelectorHandler);\n  }, 0);\n}\nconst chooseOptionhandler = (evt) => {\n  const target = evt.target;\n  const value = target.getAttribute(`value`);\n  selectorMainEl.setAttribute(`value`, value);\n  selectorMainEl.textContent = value.toUpperCase();\n  closeSelectorHandler();\n}\n\nselectorMainEl.addEventListener(`click`, openSelectorHandler);\nselectorNav.addEventListener(`click`, chooseOptionhandler);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });