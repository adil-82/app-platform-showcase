import Head from 'next/head';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import Hero from '../components/Hero';
import AppPreview from '../components/AppPreview';


export default function Home({ posts }) {
  console.log(posts)
  return (
      <div>
        <div className="max-w-7xl mx-auto px-8 py-20">
          <Hero />
        </div>  
        <div className=" bg-gray-100 py-20 px-8 space-y-8">
          <h2 className="text-4xl font-bold ">Sample Apps</h2>
          <div className="grid grid-cols-3 gap-5">
            { posts.map((post, index) => ( 
                <AppPreview key={index} post={post} />
            ))}
          </div>
          
        </div>
      </div>
  )
}

export function getStaticProps() {

  const postsPath = path.join(process.cwd(), 'posts')

  const postFilePaths = fs
    .readdirSync(postsPath)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path))

  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(postsPath, filePath))
    const { content, data } = matter(source)
    
   console.log(content, data)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}