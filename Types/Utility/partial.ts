//partial
//<>의 타입의 모든 프로퍼티를 ?로 만들어 버리는 타입
interface Address {
  email: string;
  address: string;
}

const address1: Partial<Address> = {
  email: "123@naver.com",
};

const address2: Partial<Address> = {
  address: "서울시 강남구",
};

const address3: Partial<Address> = {};
