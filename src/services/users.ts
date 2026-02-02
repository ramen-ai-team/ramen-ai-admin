import { api } from './api';
import { User } from '../types/user';

export const usersAPI = {
  getAll: async (): Promise<User[]> => {
    const response = await api.get('/users');
    return response.data;
  },
};
