import Link from 'next/link';
import { Metadata } from 'next';
import { Props } from '@/app/types';
import PostItem from '@/components/PostItem';

export async function generateMetadata({params: {id}} : Props): Promise<Metadata> {

return {
    title: `Blog page | Post ${id}`
}
    
}




export default function Post({params: {id}} : Props) {

    return (
        <>
        <button className="back">
            <Link  href={'/blog'}>Back</Link>
        </button>
        <PostItem id={id}/>
        </>
    )
}