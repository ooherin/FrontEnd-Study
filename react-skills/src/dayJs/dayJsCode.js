import dayjs from "dayjs";

let today1 = dayjs();
console.log(today1);
// M {
//   '$L': 'en',
//   '$d': 2023-07-13T02:29:33.510Z,
//   '$x': {},
//   '$y': 2023,
//   '$M': 6,
//   '$D': 13,
//   '$W': 4,
//   '$H': 11,
//   '$m': 29,
//   '$s': 33,
//   '$ms': 510
// }

let today2 = dayjs(new Date());
console.log(today2);

let theDay = dayjs("2023-1-1");
console.log(theDay);

console.log(theDay.$y); //2023

let changedDay = theDay.year(2024).month(10).date(31);
//달은 선택한 숫자보다 +1로 나온다.
console.log("changeaa", changedDay);

// console.log(dayjs().set("year", 2020));
//현재시간의 year를 2020년으로 바꿔준다.
const newDay = dayjs().set("month", 11);
console.log(newDay);

let dayEx = dayjs("2000-10-20");
dayEx = dayEx.year(2003).month(7).date(10);
console.log("exx", dayEx);
console.log(dayEx.format());
//2003-08-10T00:00:00+09:00
