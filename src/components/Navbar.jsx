import logo from "../assets/sp.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


const Navbar = () => {
  return (
    <>

    <div>

        <nav className='flex items-center justify-between py-6'>

            <div className='flex flex-shrink-0 items-center'>
                <a href="/" aria-label='HOME'>
                <img src={logo} className="mx-2" width={100} height={50}/></a>
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">

                <a href="https://www.linkedin.com/in/sarada-senapati-b0436231b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                 target="_blank"
                 rel= "noopner noreferrer"
                 arial-label="Linkedin">

                       <FaLinkedin />


                 </a>

                 <a href="https://github.com/SaradaSenapati"
                 target="_blank"
                 rel= "noopner noreferrer"
                 arial-label="Linkedin">

                    <FaGithubSquare />


                 </a>

                 <a href="https://www.instagram.com/"
                 target="_blank"
                 rel= "noopner noreferrer"
                 arial-label="Linkedin">

                 <FaInstagramSquare />


                 </a>

                

            </div>

        </nav>



    </div>
      
    </>
  )
}

export default Navbar
