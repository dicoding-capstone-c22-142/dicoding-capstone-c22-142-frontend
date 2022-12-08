import CashierApiSource from '../data/cashier-api-source';
import CashierUrlParser from '../routes/cashier/url-cashier-parser';

const transactionProcess = async ({
  productName, productType, price, total, employee, received, lengthOfProduct,
}) => {
  const transactions = {
    payment_method: 'Tunai',
    product_name: productName,
    product_type: productType,
    product_price: price,
    total_bill: total,
    author: employee.value,
    received: received.value,
    change: parseInt(received.value, 10) - total,
    amount: lengthOfProduct,
  };
  await CashierApiSource.productPurchases(transactions);

  const url = CashierUrlParser.parseActiveUrlWithoutCombiner();
  const data = await CashierApiSource.getProductById(url.id);
  const product = {
    product_name: data.product_name,
    product_image: data.product_image,
    product_price: data.product_price,
    product_type: data.product_type,
    current_stock: data.current_stock,
    capital: data.capital,
    product_length: data.product_length,
    current_length: (data.current_length - lengthOfProduct).toFixed(1),
  };
  await CashierApiSource.updateProduct(url.id, product);
};

export default transactionProcess;
