const express = require(`express`);
const mongoose = require(`mongoose`);
const axios = require('axios');
const cheerio = require('cheerio');
const getUrl = `https://www.ethernodes.org/countries`;

const PORT = process.env.PORT || 3000;
const dataArray = [];
const app = express();

const getData = (html) => {
  const $ = cheerio.load(html);
  $(`li.list-group-item`).each((i, elem) => {
    dataArray.push({
      title: $(elem).find(`a`).text() || ``,
      nodesCount: $(elem).find(`.text-muted`).text()
    });
  })
}

const getStakingRewardsPage = () => {
  axios.get(getUrl)
    .then(response => {
      getData(response.data);
    })
    .catch(err => console.log(err));
}

async function start() {
  try {
    await mongoose.connect(`mongodb+srv://viktor:123123112@cluster0-76sl0.mongodb.net/coins`, {
      useUserUrlParser: true,
      useFindAndModify: false
    })
    app.listen(PORT, () => {
      console.log(`Server is on...`);
    })
    getStakingRewardsPage();

  } catch (e) {
    console.log(e);
  }
}


start();