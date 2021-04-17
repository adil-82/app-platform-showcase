import  Link from "next/link";

export default function AppPreview({ post }) {
    return (
        <div className="flex flex-col bg-white rounded-lg shadow">
          <Link href="/">
            <a className="group relative py-3 px-2 bg-blue-500 text-white rounded-t-lg flex items-center justify-center text-2xl font-extrabold hover:bg-blue-400">
            
                <span className="block absolute -bottom-3 inset-x-0 h-6 bg-blue-500 transform skew-y-2 group-hover:bg-blue-400"></span>
           
                <h3 className="transform translate-y-2 group-hover:translate-y-1 transition duration-200"> {post.data.title} </h3>
            </a>
          </Link>                 
            <div className="h-full p-6 pt-10 space-y-4 flex flex-col ">
                <p className="flex-grow"> {post.data.description} </p>
                <a className="block"> Learn More ! </a>   
            </div>
        </div>
    )
}
