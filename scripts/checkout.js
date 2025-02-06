import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProductsFetch } from "../data/products.js";
// import { loadCarts } from "../data/cart.js";
// import '../data/cart-oop.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js'

async function loadPage() {
  try {
    await loadProductsFetch();
  } catch (error) {
    console.error(error);
  }

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

// Promise.all([loadProductsFetch()]).then((value) => {
//   renderCheckoutHeader();
//   renderOrderSummary();
//   renderPaymentSummary();
// });

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve("value1");
//   });
// })
//   .then((value) => {
//     console.log(value);

//     return new Promise((resolve) => {
//       loadCarts(() => {
//         resolve();
//       });
//     });
//   })
//   .then(() => {
//     renderCheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
//   });

// loadProducts(() => {
//   loadCarts(() => {
//     renderCheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
