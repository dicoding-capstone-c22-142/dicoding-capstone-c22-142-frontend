import CONFIG from './config';

const API_ENDPOINT = {
  PRODUCTS: `${CONFIG.BASE_URL}products`,
  SEARCHPRODUCT: (query) => `${CONFIG.BASE_URL}products?product_name=${query}`,
  SEARCHSTOCK: (query) => `${CONFIG.BASE_URL}products?outstock=${query}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}products/${id}`,
  TRANSACTIONS: `${CONFIG.BASE_URL}transactions`,
  DETAILTRANSACTIONS: (id) => `${CONFIG.BASE_URL}transactions/${id}`,
  USERS: (id) => `${CONFIG.BASE_URL}users/${id}`,
};

export default API_ENDPOINT;
