import  Link from "next/link";
import { FaReact, FaPython, FaVuejs } from 'react-icons/fa';
import { DiPostgresql, DiMysql } from "react-icons/di";
// import { icons } from "react-icons/lib";

const icons = {
    react: FaReact,
    python: FaPython,
    vue: FaVuejs,
    postgresql: DiPostgresql,
    mysql: DiMysql
};

export default function AppPreview({ post }) {
    const technologies = post.data.technologies;
    function render(type) {
        if(!icons[type]) return false;
        const Icon = icons[type];
        return <Icon />;
    }
    console.log(post.data.technologies)

    return (
        <div className="flex flex-col bg-white rounded-lg shadow">
          <Link href={`/posts/${post.filePath.replace(/\.mdx?$/,"")}`}>
            <a className="group relative py-3 px-2 space-y-2 bg-blue-500 text-white rounded-t-lg flex flex-col items-center justify-center text-2xl font-extrabold hover:bg-blue-400">
           
                <span className="block absolute -bottom-3 inset-x-0 h-6 bg-blue-500 transform skew-y-2 group-hover:bg-blue-400"></span>

                {/* title */}
                <h3 className="transform translate-y-2 group-hover:translate-y-1 transition duration-200"> {post.data.title} </h3>
                
                {/* icons */}
                {post.data.technologies && (
                    <div className="flex space-x-3 group-hover:space-x-6">
                        {post.data.technologies.map((tech, index) => (
                        <div className="bg-blue-700 p-1 shadow rounded-lg " key={index}> 
                            {render(tech.name)}
                            {/* {render(tech.name)}
                            {render(tech.name)} */}
                        </div>
                    ))}
                    </div>

                )}

            </a>
          </Link>                 
            <div className="h-full p-6 pt-10 space-y-4 flex flex-col ">
                <p className="flex-grow"> {post.data.description} </p>
                <a className="block"> Learn More ! </a>   
            </div>
        </div>
    )
}
