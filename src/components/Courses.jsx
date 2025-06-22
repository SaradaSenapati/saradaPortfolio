
import intern from "../assets/certificate/intern.jpg" ;
const Courses = () => {
  return (
    <>

  <div className='  pb-4'>
  <h2 className='my-10 text-center text-4xl'>Courses</h2>


  <div>

   <div className="w-full lg:px-10 py-[80px]  grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-10">

   {/* <div  className='flex flex-col justify-center items-end gap-6 bg-cover bg-center p-[10rem] rounded-lg' style={{backgroundImage:`url(${intern})`}}> 
 </div>  */}


   <div  className='flex flex-col justify-center items-center gap-6 bg-cover bg-center shadow-lg shadow-blue-500/50  blur-sm p-[10rem] rounded-lg hover:blur-none transition-all' style={{backgroundImage:`url(${ intern})`}}>

    
    

  </div>
 

    {/* <div  className='flex flex-col justify-center items-end gap-6 bg-cover bg-center p-[10rem] rounded-lg' style={{backgroundImage:`url(${intern})`}}>

    

    

  </div>  */}

</div>


 </div>





   </div>


      
    </>
  )
}

export default Courses
