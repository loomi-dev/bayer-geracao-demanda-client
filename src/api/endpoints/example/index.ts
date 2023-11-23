import axios from 'axios';

import { RandomUserResponse } from './types';

export const getRandomUsers = async (): Promise<RandomUserResponse> => {
  const response = await axios.get('https://randomuser.me/api/');
  return response.data;
};
