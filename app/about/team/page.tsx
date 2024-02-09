'use client'

import { useEffect } from 'react';
import Link from 'next/link';
import { useUsersStore } from '@/app/store';

type User = {
  name: string;
  email: string;
  id: number;
};


export default function Team() {
  const users = useUsersStore((state) => state.users);
  const fetchUsers = useUsersStore((state) => state.fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h3>Our team</h3>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <Link href={`/about/team/${user.id}`}>
              <div>Name: {user.name}</div>
              <div>Email: {user.email}</div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}