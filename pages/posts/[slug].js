import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export default function Post({post}) {
  console.log(post)
  return (
        <div>
            post page goes here
        </div>
    )
}

// STEP 1. I have this many pages I want you to generate
export async function getStaticPaths() {
    // get all of the markdown files
    const postsPath = path.join(process.cwd(), 'posts')

    const postFilePaths = fs
      .readdirSync(postsPath)
      // Only include md(x) files
      .filter((path) => /\.mdx?$/.test(path))

    const paths = postFilePaths
      // Remove file extensions for page paths
      .map((path) => path.replace(/\.mdx?$/, ''))
      // Map the path into the static paths object required by Next.js
      .map((slug) => ({ params: { slug } }))      

    // pass it into a paths variable
    return {
        paths,
        fallback: false
    }
}

// STEP 2. for each individual page: get this data
export async function getStaticProps({ params }) {
   // get all of the markdown files
    const postsPath = path.join(process.cwd(), 'posts')

    const postFilePath = path.join(postsPath, `${params.slug}.mdx`)
    

      const source = fs.readFileSync(postFilePath)
      const { content, data } = matter(source)
      return { props: { post: { content, data } }  }
}


// export const getStaticPaths = async () => {
//   const paths = postFilePaths
//     // Remove file extensions for page paths
//     .map((path) => path.replace(/\.mdx?$/, ''))
//     // Map the path into the static paths object required by Next.js
//     .map((slug) => ({ params: { slug } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }