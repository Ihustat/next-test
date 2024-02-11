'use client'

import { useEffect } from 'react';
import { IdProps } from '@/app/types';
import { useUserStore } from '@/app/stores/usersStore';

export default function UserItem(props: IdProps) {
    const {name, fetchUser} = useUserStore()

    useEffect(() => {
        fetchUser(props.id)
        console.log(name)
    }, [])

    return (
        <div>{name}</div>
    )
}