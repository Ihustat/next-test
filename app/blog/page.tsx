import { Metadata } from "next";
import PostsList from "@/components/PostsLists"

export const metadata: Metadata = {
    title: "Blog page",
  };
  


export default  function Blog() {
   
    return (
        <>
    <h1 className='blog-title'>Blog page</h1>
 
    <ul>
        <PostsList/>
      
    </ul>
    </>
    )
}