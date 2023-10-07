//328
const bigSpenders = (customers) => {
  const hasBigPurchaseCustomers = hasBigPurchase(customers, 100);
  const hasBigAndManyCustomers = hasManyPurchase(hasBigPurchaseCustomers, 2);
  return hasBigAndManyCustomers;
};

const hasBigPurchase = (customers, standard) => {
  return customers.filter((customer) => {
    return customer.price >= standard;
  });
};

const hasManyPurchase = (customers, standard) =>
  customers.filter((customer) => {
    return customer.count >= standard;
  });

//329
function average(numbers) {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum / numbers.length;
}

console.log(average([1, 3, 5]));

//numbers가 배열이 아닐때

const reduceWithoutArray = (...rest) => {
  const array = [...rest];
  console.log("array", array);
  return array.reduce((acc, cur) => acc + cur, 0);
};

const averageWidthNum = (...rest) => {
  const length = [...rest].length;
  return reduceWithoutArray(...rest) / length;
};

console.log("sum", reduceWithoutArray(1, 2, 3, 4, 5));
console.log("aa", averageWidthNum(1, 2, 3));

//고객의 각 구매액 평균 구하기
const averagePurchaseOfCustomer = (customers) => {
  return customers.map((customer) => {
    const purchaseTotal = customer.purchases.map((purchase) => {
      purchase.total;
    });
    return average(purchaseTotal);
  });
};
