import Footer from "../components/footer"
import Leftside from "./leftside"

function About() {
  return (
    <>
    <div className="flex flex-col md:flex-row">
        <Leftside/>
        <div className="flex-1  ">
        <h3 className="text-3xl text-center mt-5">About Us</h3>
        <div className="flex-1 flex justify-center items-center ">
        <p className="text-lg text-center mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit<br/> non eos ullam itaque corporis dolorum doloremque ipsa? Repellat veritatis a dolore<br/> eveniet voluptates quo, earum reprehenderit, praesentium cupiditate libero minima.</p>
        
        </div>
        <h5 className="flex-1 flex justify-center items-center text-3xl mt-10">what are you waiting for start writing <br/>today and publish them on our page and earn more</h5>
        </div>
     
    </div>
    <Footer/>
    </>
  )
}

export default About
