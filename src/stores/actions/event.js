import axios from '../../utils/axios';

export const getAllEvent = search => {
  return {
    type: 'GET_ALL_EVENT',
    payload: axios.get(
      `/event?page=$&searchName=${search}&searchDateShow=&sort=&limit=4`,
    ),
  };
};
