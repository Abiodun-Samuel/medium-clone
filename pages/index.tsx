import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import {Post} from '../typings'
interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  console.log(posts);

  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium</title>
        <link rel='icon' href="/favicon.icon" />
      </Head>

      <Header />
      
      <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl font-bold max-w-xl font-serif'> <span className=''>Stay Curious.</span></h1>
          <h2 className='text-1xl'>Discover stories, thinking, and expertise from writers on any topic.</h2>
        </div>
       <img className="hidden md:inline-flex h-32 lg:h-full" src="https://images.pexels.com/photos/4240606/pexels-photo-4240606.jpeg?auto=compress&cs=tinysrgb&w=340&h=427&dpr=2" alt="hero-img" />
      </div>

      {/* Posts  */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className=''>
              <img src={urlFor(post.mainImage).url()!} alt={post.title} />
              <div className='flex justify-between p-5 bg-white'>
                <div>
                  <p>{ post.title}</p>
                  <p>{post.description} by {post.author.name}</p>
                </div>
                  <img className='h-12 w-12 rounded-full' src={urlFor(post.author.image).url()!} alt={post.title} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    description,
    mainImage,
    slug,
    body,
      author -> {
      name, 
      image
    }
  }`;

  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts
    }
  }

}

