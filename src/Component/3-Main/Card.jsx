import { motion } from "framer-motion";
const Card = ({img, title , url}) => {
  return (
    <motion.article 
    layout
    initial={{ transform: "scale(0)" }}
    animate={{ transform: "scale(1)" }}
    transition={{type: "spring" , damping: 8, stiffness:50}}
    className='card'>
    <img width={266} height={135} style={{padding:'0 0.01rem'}} src={img} alt="" className='card-image' />

    <div style={{width:'266px'}} className="box ">

      <h1 className='title-card'>{title}</h1>
      <p className='sub-title' >simple eccomerce for display the product avaible</p>

      <div style={{justifyContent:"space-between"}} className='flex icons' >
      

        <div style={{gap:'11px'}} className='flex'>
         <div className='icon-link'></div>
         <div className='icon-github'></div>
         </div>

         
         <a className='link flex' href={url}>more
         <span style={{alignSelf:"end"}} className='icon-arrow_forward icon'></span>
         </a>
        
       
      </div>
      
    </div>
   </motion.article>
  )
}

export default Card