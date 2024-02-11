import { create } from 'zustand';

import { UsersState, UserState} from '@/app/types';


export const useUsersStore = create<UsersState>((set) => ({
    users: [],

    fetchUsers: async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        set({ users: result });
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
  }));
  
  export const useUserStore = create<UserState>((set) => ({
      name: '',
      fetchUser: async (id: number) => {
          try {
              const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
              const result = await response.json();
              set({ name: result.name });
            } catch (error) {
              console.error('Error fetching user:', error);
            }
      }
  }))