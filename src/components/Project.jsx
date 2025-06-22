
import {PROJECTS} from "../constants"
const Project = () => {
  return (
    <>

    <div className="pb-4">

        <h2 className="my-20 text-center text-4xl">Projects</h2>

        <div>
            {PROJECTS.map((project,index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">

                    <img src={project.image} 
                    width={250} 
                    height={250} 
                    alt={project.title} 
                    className="mb-6 rounded shadow-lg shadow-cyan-500/50"/>
                    

                    </div>

                    <div className=" w-full max-w-wl lg:w-3/4   ">

                    <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                    <p className="mb-4 text-stone-400">{project.description}</p>
                    {project.technologies.map((tech,index)=>(
                        <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" key ={index}>{tech}</span> 

                    ))}


                    <a href={project.watch_url}
                    
                    target="_blank"
                    //rel="opener referrer"
                    
                    className="bg-white rounded-full p-2 text-sm  flex w-fit text-stone-800 mt-5  hover:bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:text-white">Preview</a>

                    </div>

                    

                    
                

                </div>
            ))}
        </div>


    </div>
      
    </>
  )
}

export default Project
