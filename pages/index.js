import Head from 'next/head';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';


export default function Home({ posts }) {
  console.log(posts)
  return (
      <div>
        <h1 className="min-h-screen bg-blue-500">
            Hello there
        </h1>
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