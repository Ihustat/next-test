'use client'

import { useEffect } from 'react';
import { useUserStore } from '@/app/store';
import { Props } from '@/app/types';



export default  function Team({params: {id}} : Props) {
    const name = useUserStore((state) => state.name);
    const fetchUser = useUserStore((state) => state.fetchUser);  

    useEffect(() => {
        fetchUser(id);
      }, []);

    return  <div>{name}</div>

}