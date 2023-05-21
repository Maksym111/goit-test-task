const KEY_DATA = "users";

export const getDataLocStor = () => {
  try {
    const data = localStorage.getItem(KEY_DATA);
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
  }
};
export const setDataLocStor = (data) => {
  try {
    const dataJson = JSON.stringify(data);
    localStorage.setItem(KEY_DATA, dataJson);
  } catch (error) {
    console.error(error);
  }
};
