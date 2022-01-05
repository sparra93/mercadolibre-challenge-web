import axios from "axios";

import { HOST_URL } from "../utils/constants";

const Item = {
  getByQuery: async (query) => {
    try {
      const response = await axios.get(`${HOST_URL}/items?q=${query}`);
      return response;
    } catch (error) {
      return error.response;
    }
  },
  getById: async (itemId) => {
    try {
      const response = await axios.get(`${HOST_URL}/items/${itemId}`);
      return response;
    } catch (error) {
      return error.response;
    }
  }
};

export default Item;
