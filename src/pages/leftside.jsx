import { Link } from "react-router-dom";

export default function Leftside() {
    return (
      <div className="h-auto sm:h-[500px] md:h-[650px] w-48 p-4">
        <h3 className="text-black text-center">Activities</h3>
        <Link to="#" className="block mt-6"><p>Create Blogs</p></Link>
        <Link to="/" ><p>Read  Blogs</p></Link>
      </div>
    );
  }
  
