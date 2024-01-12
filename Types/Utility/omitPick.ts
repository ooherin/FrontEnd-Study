//pick
interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

type BasicProduct = Pick<Product, "id" | "name">;

const product1: BasicProduct = {
  id: 123,
  name: "다이슨 슈퍼 진공 청소기",
};

//omit
type ProductWithoutBrand = Omit<Product, "brand">;
//속성을 1-2개만 빼야 할 때 좋을듯?

const product2: ProductWithoutBrand = {
  id: 123,
  name: "다이슨 슈퍼 진공 청소기",
  price: 200000000,
  stock: 10,
};
