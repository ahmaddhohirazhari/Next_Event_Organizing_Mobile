import axios from '../../utils/axios';

export const getAllEvent = (page, search, filter, date) => {
  return {
    type: 'GET_ALL_EVENT',
    payload: axios.get(
      `/event?page=${page}&searchName=${search}&searchDateShow=${date}&sort=${filter}&limit=4`,
    ),
  };
};
