import Footer from "../components/footer";
import Leftside from "./leftside";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
    <div className="flex flex-col md:flex-row">
      {/* Left Sidebar */}
      <Leftside />

      {/* Home Content */}
      <div className="flex-1 mx-4 p-4">
        <h3 className="text-2xl">All Posts here </h3>
        <div className="mt-3  flex flex-wrap justify-start gap-4 ">
            <div className="h-72 w-full sm:w-60 border-2  flex flex-col">
                <img src="https://www.word-nerds.com.au/wp-content/uploads/2022/01/Blog-Writing-1030x688.jpg" className="h-36 w-full object-cover"/>
                <h6 className="ml-2 text-lg">title</h6>
                <p className="ml-2">blogs are very important...</p>
                <Link to={`/blog/1`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ml-3 mr-3">
              Read More
            </Link>

            </div>
            <div className="h-72 w-full sm:w-60 border-2  flex flex-col">
                <img src="https://www.word-nerds.com.au/wp-content/uploads/2022/01/Blog-Writing-1030x688.jpg" className="h-36 w-full object-cover"/>
                <h6>title</h6>
                <p>blogs are very important...</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ml-3">
                 Read More
                </button>

            </div>
            <div className="h-72 w-full sm:w-60 border-2  flex flex-col">
                <img src="https://www.word-nerds.com.au/wp-content/uploads/2022/01/Blog-Writing-1030x688.jpg" className="h-36 w-full object-cover"/>
                <h6>title</h6>
                <p>blogs are very important...</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ml-3">
                 Read More
                </button>

            </div>
            <div className="h-72 w-full sm:w-60 border-2  flex flex-col">
                <img src="https://www.word-nerds.com.au/wp-content/uploads/2022/01/Blog-Writing-1030x688.jpg" className="h-36 w-full object-cover"/>
                <h6>title</h6>
                <p>blogs are very important...</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ml-3">
                 Read More
                </button>

            </div>
            <div className="h-72 w-full sm:w-60 border-2  flex flex-col">
                <img src="https://www.word-nerds.com.au/wp-content/uploads/2022/01/Blog-Writing-1030x688.jpg" className="h-36 w-full object-cover"/>
                <h6>title</h6>
                <p>blogs are very important...</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ml-3">
                 Read More
                </button>

            </div>
            <div className="h-72 w-full sm:w-60 border-2  flex flex-col">
                <img src="https://www.word-nerds.com.au/wp-content/uploads/2022/01/Blog-Writing-1030x688.jpg" className="h-36 w-full object-cover"/>
                <h6>title</h6>
                <p>blogs are very important...</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ml-3">
                 Read More
                </button>

            </div>
            <div className="h-72 w-full sm:w-60 border-2  flex flex-col">
                <img src="https://www.word-nerds.com.au/wp-content/uploads/2022/01/Blog-Writing-1030x688.jpg" className="h-36 w-full object-cover"/>
                <h6>title</h6>
                <p>blogs are very important...</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ml-3">
                 Read More
                </button>

            </div>
            <div className="h-72 w-full sm:w-60 border-2  flex flex-col">
                <img src="https://www.word-nerds.com.au/wp-content/uploads/2022/01/Blog-Writing-1030x688.jpg" className="h-36 w-full object-cover"/>
                <h6>title</h6>
                <p>blogs are very important...</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 ml-3">
                 Read More
                </button>

            </div>

        </div>
      </div>
      
    </div>
    <Footer/>
    </>
    
  );
}

export default Home;
