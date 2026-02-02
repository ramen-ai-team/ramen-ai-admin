import { useQuery } from '@tanstack/react-query';
import { usersAPI } from '../services/users';

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: usersAPI.getAll,
  });
};
