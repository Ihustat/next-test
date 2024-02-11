'use client'

import { useEffect } from 'react';
import Link from 'next/link';
import { User } from '@/app/types';
import { useUsersStore } from '@/app/stores/usersStore';

export default function UsersList() {
    const {users, fetchUsers} = useUsersStore()

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <>
         {users.map((user: User) => (
          <li key={user.id}>
            <Link href={`/about/team/${user.id}`}>
              <div>Name: {user.name}</div>
              <div>Email: {user.email}</div>
            </Link>
          </li>
        ))}
        </>
    )
}