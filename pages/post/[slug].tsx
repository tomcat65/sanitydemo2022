import {GetStaticProps} from 'next';
import Header from "../../components/Header";
import { sanityClient,urlFor } from "../../sanity";
import { Post } from "../../typings";

export default function Post() {
    return (
        <main>
            <Header/>
        </main>
    );
}
export const getStaticPaths=async ()=>{
const query=`*[_type=="post]{
    _id,
    slug{
        current
    }
}`;
const posts=await sanityClient.fetch(query)
const paths=posts.map((post:Post)=>({
    params:post.slug.current
}))
return {
    paths,
    fallback:"blocking"
}
};
export const getStaticProps: GetStaticProps =async ({params})=>{

}
  