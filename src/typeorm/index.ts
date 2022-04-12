import { stock_list } from './stock_list';
import { general_info } from './general_info';
import { company_news } from './company_news';
import { financial_info } from './financial_info';
import { trade_history } from './trade_history';

const entities = [
  stock_list,
  general_info,
  company_news,
  financial_info,
  trade_history,
];
export {
  stock_list,
  general_info,
  company_news,
  financial_info,
  trade_history,
};
export default entities;
