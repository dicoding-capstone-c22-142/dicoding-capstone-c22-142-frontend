import axios from 'axios';
import API_ENDPOINT from '../global/api-endpoint';
import CONFIG from '../global/config';

class CashierApiSource {
  static async getAllProducts() {
    const response = await axios.get(API_ENDPOINT.PRODUCTS, {
      headers: {
        'x-api-key': 'TYYvh7ZG8t8BkasPcutaP3OwGu5TuPKSae1w7JMy',
      },
    });
    return response.data.products;
  }

  static async addProduct(product) {
    const response = await axios.post(API_ENDPOINT.PRODUCT, product, {
      headers: {
        'x-api-key': `${CONFIG.API_KEY}`,
      },
    });
    return response.data;
  }

  static async getProductById(id) {
    const response = await axios.get(API_ENDPOINT.DETAIL(id), {
      headers: {
        'x-api-key': `${CONFIG.API_KEY}`,
      },
    });
    return response.data;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async searchRestaurant(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    return (responseJson);
  }

  static renderError(response) {
    const restaurantsContainer = document.querySelector('#content');
    restaurantsContainer.innerHTML = `${response.status} ${response.statusText}`;
  }
}

export default CashierApiSource;
