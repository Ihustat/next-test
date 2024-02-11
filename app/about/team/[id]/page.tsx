import { Metadata } from 'next';
import { Props } from '@/app/types';
import UserItem from '@/components/UserItem';

export async function generateMetadata({params: {id}} : Props): Promise<Metadata> {

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  const json = await response.json();

  const name = json.name

  return {
      title: `About page | Team | ${name}`
  }
      
  }

export default  function Team({params: {id}} : Props) {


    return (
      <>
        <UserItem id={id}/>
      </>
    )

}