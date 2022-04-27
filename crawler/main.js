const cheerio = require('cheerio');
const axios = require('axios');

const classLink = [
  'http://mse.mn/mn/companies_info/1/114',
  'http://mse.mn/mn/companies_info/2/168',
  'http://mse.mn/mn/companies_info/3/169',
];
const baseUrl = 'http://mse.mn/mn/company/';

const crawler = () => {
  classLink.map(async (el, idx) => {
    await axios.get(el).then((res) => {
      const $ = cheerio.load(res.data);
      const selector =
        'body > div.container.page_container > div > div.col-lg-9.col-md-9 > div > div.companies_info > table > tbody > tr';
      let arr = [];
      $(selector).each((idx, el) => {
        let obj = {
          code: $(
            `body > div.container.page_container > div > div.col-lg-9.col-md-9 > div > div.companies_info > table > tbody > tr:nth-child(${
              idx + 1
            }) > td:nth-child(3) > a`,
          )
            .attr(`href`)
            .split('/')[3],
          ticker: $(
            `body > div.container.page_container > div > div.col-lg-9.col-md-9 > div > div.companies_info > table > tbody > tr:nth-child(${
              idx + 1
            }) > td:nth-child(2)`,
          ).text(),
        };

        axios
          .post('http://localhost:3000/api/stock-list/create', obj)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      });
    });
  });
};
//   const $ = cheerio.load(res.data);
//   const arr = [];
//   const selector = "#ajaxTradeHistory > table > tbody > tr";

crawler();
