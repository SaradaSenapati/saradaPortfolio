import { RiReactjsLine } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";

const Technologies = () => {
  return (
    <>

    <div  className='pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>


            <div>
            <FaHtml5 className="text-7xl text-orange-500"/>

            </div>

            <div className="p-4">
                 <SiTailwindcss className="text-7xl text-blue-400" />
            </div>

           

            <div className="p-4">

            <IoLogoJavascript  className="text-7xl text-yellow-400"/>

            </div>


            <div className="p-4">

            <RiReactjsLine className="text-7xl text-cyan-400"/>

            </div>

            <div className="p-4">
            <DiNodejs className="text-7xl text-green-400"/>

            </div>

            <div className="p-4">
            <SiExpress className="text-7xl text-white-400"/>
            </div>

            <div className="p-4">
            <DiMongodb className="text-7xl text-green-400" />
            </div>

        </div>

    </div>
      
    </>
  )
}

export default Technologies
