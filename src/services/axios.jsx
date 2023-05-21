import axios from "axios";

axios.defaults.baseURL = "https://645fc8ecfe8d6fb29e261fdb.mockapi.io/";

export const getUsersData = async () => {
  try {
    const res = await axios.get("users");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const putUserFollowers = async ({ id, followers }) => {
  try {
    const res = await axios.put(`users/${id}`, {
      followers: followers + 1,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
