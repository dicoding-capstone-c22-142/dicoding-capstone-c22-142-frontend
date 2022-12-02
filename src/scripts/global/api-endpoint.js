import CONFIG from './config';

const API_ENDPOINT = {
  PRODUCTS: `${CONFIG.BASE_URL}products`,
  PRODUCT: `${CONFIG.BASE_URL}product`,
  DETAIL: (id) => `${CONFIG.BASE_URL}product?product_id=${id}`,
  USERS: `${CONFIG.BASE_URL}users`,
};

export default API_ENDPOINT;
