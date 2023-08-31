import axios from "axios";

export const publicRequest = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization:
      "bearer bcf93bbb8d7c86072a41126a7928277d8d0a5490ea3b671561d0eb19ec380d26f9cde576f8f04a1fdef3c4caf73fc9ee237fcd74f9add73122e7275db63fad507d85abf9f136671eae84d5963c15e03f1f1269d8d4a02e5597323ed6ee17c81978f1a336773f032cac6630e3522c1b7177e8e1d3ea5efb77a9015dc76880ded7",
  },
});
