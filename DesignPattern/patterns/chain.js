// function biggestPurchaseBestCustomer(customers) {
//   const GoodCustomers = filter(customers, function (customer) {
//     return customer.purchases.length >= 3;
//   });

//   BigPurchasePerCustomers = map(GoodCustomers, (customer) => {
//     return maxKey(GoodCustomers.purchase, { total: 0 }, (purchase) => {
//       return purchase.total;
//     });
//   });
// }

// function maxKey(arr, init, f) {
//   return reducer(arr, init, (biggestSoFar, e) => {
//     if (f(e) > f(biggestSoFar)) return e;
//     else return biggestSoFar;
//   });
// }

//단계에 이름 붙이기
function biggestPurchaseBestCustomer(customers) {
  const bestCustomers = selectBestCustomers(customers);
  let biggestPurchases = getBiggestPurchases(bestCustomers);
  return biggestPurchases;
}

function selectBestCustomers(customers) {
  return filter(customers, (customer) => {
    return customer.purchases.length >= 3;
  });
}

function getBiggestPurchases(customers) {
  return maxKey(customers.purchase, { total: 0 }, (purchase) => {
    return purchase.total;
  });
}

//콜백에 이름 붙이기
function biggestPurchasesBestCustomers(customers) {
  const goodCustomers = filter(customers, isGoodCustomers);
  const biggestPurchases = map(goodCustomers, getBiggestPurchases);
  return biggestPurchases;
}

function isGoodCustomers(customer) {
  return customer.purchases.length >= 3;
}

function getBiggestPurchases(customer) {
  return maxKey(customer.purchase, { total: 0 }, (purchase) => {
    return purchase.total;
  });
}
