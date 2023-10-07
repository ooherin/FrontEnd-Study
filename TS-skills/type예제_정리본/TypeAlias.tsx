//Union
type Identify = {
  id: number | string;
  name: string;
};
type Contact = {
  name: string;
  email: string;
  phone: string;
};
//합집합을 통한 새로운 Union 타입 정의
type IdentifyOrContact = Identify | Contact;

const id: IdentifyOrContact = {
  id: "111",
  name: "hana",
};
const contact: IdentifyOrContact = {
  id: "222",
  name: "june",
  phone: "222-222-222",
};

//Intersection
type Employee = Identify & Contact;
const employeeWithoutId: Employee = {
  id: "111", //이거 안쓰면 에러
  name: "hana",
  email: "hana@google.com",
  phone: "123123123",
};
