// // import axios from "axios";

// // const API = axios.create({
// //   baseURL: "http://localhost:5000/api",
// // });

// // // attach token automatically
// // API.interceptors.request.use((req) => {
// //   const token = localStorage.getItem("token");
// //   if (token) {
// //     req.headers.Authorization = `Bearer ${token}`;
// //   }
// //   return req;
// // });

// // export default API;

// import axios from "axios";

// const API = axios.create({
//   baseURL: "https://foundin.onrender.com/api",
// });

// // attach token automatically
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }
//   return req;
// });

// export const createPitch = async (data) => {
//   const res = await fetch(`${BASE_URL}/pitch`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   return res.json();
// };

// export const createFunding = async (data) => {
//   const res = await fetch(`${BASE_URL}/funding`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   return res.json();
// };

// export const getPitches = async () => {
//   const res = await fetch(`${BASE_URL}/pitch`);
//   return res.json();
// };

// export const getFundings = async () => {
//   const res = await fetch(`${BASE_URL}/funding`);
//   return res.json();
// };

// export default API;
// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// // attach token automatically
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }
//   return req;
// });

// export default API;

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const createPitch = async (data) => {
  const res = await fetch(`${BASE_URL}/pitch`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const createFunding = async (data) => {
  const res = await fetch(`${BASE_URL}/funding`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getPitches = async () => {
  const res = await fetch(`${BASE_URL}/pitch`);
  return res.json();
};

export const getFundings = async () => {
  const res = await fetch(`${BASE_URL}/funding`);
  return res.json();
};

export default API;