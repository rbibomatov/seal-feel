import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "a8d5703e-a4d7-4e68-9bca-946b4969c3d8",
  },
  withCredentials: true,
});

export const authMeAPI = () => {
  return instance.get(`/auth/me`).then((response) => response.data);
};

export const loginAPI = (email, password, rememberMe) => {
  return instance
    .post(`/auth/login`, { email, password, rememberMe })
    .then((response) => response.data);
};

export const logoutAPI = () => {
  return instance.delete(`/auth/login`).then((response) => response.data);
};

export const getProfileAPI = (userId) => {
  return instance.get(`/profile/${userId}`).then((response) => response.data);
};

export const getStatusAPI = (userId) => {
  return instance.get(`/profile/status/${userId}`).then((response) => response);
};

export const updateStatusAPI = (status) => {
  return instance
    .put(`/profile/status/`, { status })
    .then((response) => response.data);
};

export const getUsersAPI = (currentPage, pageSize) => {
  return instance
    .get(`/users?page=${currentPage}&count=${pageSize}`)
    .then((response) => response.data);
};

export const followUserAPI = (userId) => {
  return instance
    .post(`/follow/${userId}`, null)
    .then((response) => response.data);
};

export const unfollowUserAPI = (userId) => {
  return instance.delete(`/follow/${userId}`).then((response) => response.data);
};
