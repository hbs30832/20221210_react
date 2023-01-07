import axios from "axios";

const token = localStorage.getItem("access-token");

axios.defaults.baseURL = "http://101.101.218.43";

if (token) {
  axios.defaults.headers = {
    Authorization: `Bearer ${token}`,
  };
}

/**
 *
 * @param {{name: string, email : string, password : string}} form
 * @returns
 */
export const postUser = async (form) => {
  try {
    const result = await axios.post("users", {
      ...form,
    });

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const singIn = (form) => {
  return axios.post("users/login", {
    ...form,
  });
};

export const getCurrentUser = () => {
  return axios.get("users/current");
};

export const patchProfile = (form) => {
  return axios.patch("users/profile", form);
};

export const postPost = (form) => {
  return axios.post("posts", form);
};

export const getAllPost = () => {
  axios.get("/posts").then((res) => console.log(res));
};
