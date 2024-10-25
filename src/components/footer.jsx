import { Link } from "react-router-dom"
import { FaInstagram } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
function Footer() {
  return (
    <div className="bg-gray-800 py-8 w-full">
    <h5 className="text-white text-2xl text-center">Follow us on</h5>
    
    <div className="flex flex-col md:flex-row items-center justify-around mt-6">
      {/* Social Links Section */}
      <div className="flex flex-col space-y-4 md:space-y-0">
        <Link to="" className="text-white flex items-center">
          <FaInstagram size={20} className="text-blue-700 mr-2" />
          MYBlogs
        </Link>
        <Link to="" className="text-white flex items-center">
          <FaYoutube size={20} className="text-red-500 mr-2" />
          MYBlogs
        </Link>
      </div>
  
      {/* Address Section */}
      <div className="text-center md:text-left mt-6 md:mt-0">
        <h3 className="text-white text-lg">Address</h3>
        <p className="text-white">Officer Colony, Block A<br />
          SofiPind, Jalandhar</p>
        <p className="text-white">Contact: 90247478</p>
      </div>
    </div>
  </div>
  
  )
}

export default Footer
