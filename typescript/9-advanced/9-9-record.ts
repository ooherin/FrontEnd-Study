// type PageInfo = {
//   title: string;
// };
// type Page = 'home' | 'about' | 'contact';

// const nav: Record<Page, PageInfo> = {
//   home: { title: 'Home' },
//   about: { title: 'About' },
//   contact: { title: 'Contact' },
// };

// type Product = 'cat' | 'dog';
// type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'

{
  //record는 객체처럼 두개를 연결하고 싶을 때 사용하는 타입이다.
  type PageInfo = {
    title: string;
  };

  type Page = "home" | "about" | "contact";

  const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" },
  };
}
