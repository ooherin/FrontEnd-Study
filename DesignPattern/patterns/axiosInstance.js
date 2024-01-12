// import axios from "axios";

// const NewInstance = axios.create({
//   // Configuration
//   baseURL: "https://geodb-cities-graphql.p.rapidapi.com",
//   timeout: 8000,
//   headers: {
//     Accept: "application/json",
//     "x-rapidapi-key": "<your-key-here>",
//   },
// });

// //axios의 class에는 어떤 것이 들어가는지?
// //인터셉터?

// class AxiosClass {
//   axios;
//   constructor(baseURL) {
//     axios.create({
//       axios = axios.create({
//         this.baseURL  = baseURL
//       })
//     });

//     GET
//   }
//   // makeAxiosInstance() {
//   //   axios.create({
//   //     baseURL: this.baseURL,
//   //     headers: {
//   //       Accept: "application/json",
//   //     },
//   //   });
//   // }
// }

// import axios from "axios";

// export default class FakeYoutube {
//   constructor() {
//     // 빈 생성자
//   }

//   async search(keyword) {
//     return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
//   }

//   async #searchByKeyword() {
//     return axios
//       .get(`/data/search.json`)
//       .then((res) => res.data.items)
//       .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
//   }

//   async #mostPopular() {
//     return axios.get(`/data/popular.json`).then((res) => res.data.items);
//   }
// }
// //위의 경우에는 header는 어떻게 설정? axiosInstance?

// // 트리쉐이킹 => 사용하지 않은 코드를 없앤다. 낙엽을 떨군다. 번들 사이즈를 줄이기 위한 목적
// // 패키지 크기 줄이기 위해 => 번들링
// // npm build
