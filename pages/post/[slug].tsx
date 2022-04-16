import { GetStaticProps } from "next";
import Header from "../../components/Header"
import { sanityClient, urlFor } from "../../sanity"
import {  Post_One } from "../../typings";
interface Props {
   post:  Post_One;
}

export default function Post({ post }: Props) {
   console.log(post)

   return (<main>
      <Header />
      
      <img className="" src={urlFor(post.mainImage).url()} alt={post.title} />
   </main>)
}

export const getStaticPaths = async () => {
   const query = `*[_type == "post"]{
      _id,
         slug {
         current
         }
      }`;
   const posts = await sanityClient.fetch(query);
   const paths = posts.map((post:  Post_One) => ({
      params: {
         slug: post.slug.current
      }
   }))
   return {
      paths,
      fallback: "blocking"
   }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
   const query = `*[_type == "post" && slug.current == $slug ][0]{
         _id,
      _createdAt,
         title,
         description,
         mainImage,
         slug,
         body,
            author -> {
            name,
            image
         },
         "comments": *[
            _type == "comment" &&
            post._ref == ^._id &&
            approved == true
         ]
      }`
   const post = await sanityClient.fetch(query, {
      slug: params?.slug
   })

if (!post) {
   return {
      notFound: true
   }
}
return {
   props: {
      post
   },
   revalidate : 60, //update cached version after 60seconds
}
}