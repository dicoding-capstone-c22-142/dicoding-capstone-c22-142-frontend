import axios from 'axios';
import API_ENDPOINT from '../global/api-endpoint';
import CONFIG from '../global/config';

class CashierApiSource {
  static async getAllProducts() {
    const response = await axios.get(API_ENDPOINT.PRODUCTS);
    return response.data.data.products;
  }

  static async addProduct(product) {
    if (product.stock <= 0) product.visibility = false;
    const response = await axios.post(API_ENDPOINT.PRODUCT, product);
    return response.data;
  }

  static async getProductById(id) {
    const response = await axios.get(API_ENDPOINT.DETAIL(id));
    return response.data.data.product;
  }

  static async updateProduct(id, product) {
    const response = await axios.put(API_ENDPOINT.DETAIL(id), product);
    return response.data;
  }

  static async deleteProduct(id) {
    const response = await axios.delete(API_ENDPOINT.DETAIL(id));
    return response.data;
  }

  static async productPurchases(product) {
    const response = await axios.put(API_ENDPOINT.product, product);
  }

  static async searchProduct(query) {
    const response = await axios.get(API_ENDPOINT.SEARCHPRODUCT(query));
    return response.data.data.products;
  }

  static renderError(response) {
    const restaurantsContainer = document.querySelector('#content');
    restaurantsContainer.innerHTML = `${response.status} ${response.statusText}`;
  }
}

export default CashierApiSource;
