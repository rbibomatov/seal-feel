import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "a8d5703e-a4d7-4e68-9bca-946b4969c3d8",
  },
  withCredentials: true,
});

export const authAPI = {
  authMe() {
    return instance.get(`/auth/me`).then((response) => response.data);
  },
  login(email, password, rememberMe) {
    return instance
      .post(`/auth/login`, { email, password, rememberMe })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete(`/auth/login`).then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`/profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return instance
      .get(`/profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateProfile(profile) {
    return instance.put(`/profile/`, profile).then((response) => response.data);
  },
  updateStatus(status) {
    return instance
      .put(`/profile/status/`, { status })
      .then((response) => response.data);
  },
  updatePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);

    return instance
      .put(`/profile/photo/`, formData)
      .then((response) => response.data);
  },
};

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`/users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  followUser(userId) {
    return instance
      .post(`/follow/${userId}`, null)
      .then((response) => response.data);
  },
  unfollowUser(userId) {
    return instance
      .delete(`/follow/${userId}`)
      .then((response) => response.data);
  },
};
