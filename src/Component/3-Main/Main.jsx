import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import './Main.css'
import Card from './Card'
const MyProjects = [
       {
         projectTitle: 'Ecommerce ',
         Category: 'php',
         imagPath: '../../../assests/zgheib.png',
         url:'https://zgheibtradingmachinery.com/'
       },
       {
         projectTitle: 'full Eccomerce',
         Category: 'php',
         imagPath: '../../../assests/assifashion.png',
         url:'https://assifashion.com/'
       },
       {
         projectTitle: 'Tourism in Lebanon',
         Category: 'html',
         imagPath: '../../../assests/prject-3.jpg',
         url:'https://zgheibtradingmachinery.com/'
       },
       {
         projectTitle: 'Simple Portfilio',
         Category: 'php',
         imagPath: '../../../assests/project-4.png',
         url:'https://zgheibtradingmachinery.com/'
       },
       {
              projectTitle: 'Simple Eccomerce',
              Category: 'html',
              imagPath: '../../../assests/first-project.png',
              url:'https://zgheibtradingmachinery.com/'

            },
            {
              projectTitle: 'Food Eccomerce',
              Category: 'js',
              imagPath: '../../../assests/second-project.jpg',
              url:'https://zgheibtradingmachinery.com/'

            },
            {
              projectTitle: 'Tourism in Lebanon',
              Category: 'js',
              imagPath: '../../../assests/prject-3.jpg',
              url:'https://zgheibtradingmachinery.com/'

            },
            {
              projectTitle: 'Simple Portfilio',
              Category: 'html',
              imagPath: '../../../assests/project-4.png',
              url:'https://zgheibtradingmachinery.com/'

            },
     ]
const Main = () => {
    const [curentActive , setCurentactive] = useState("all");
    const [arr , setARR] = useState(MyProjects);
     const handleClicke = (buttonCategory)=>{
     setCurentactive(buttonCategory );
       const newarr = MyProjects.filter((item) =>{
              return item.Category === buttonCategory

       }); setARR(newarr);
}
  return(
  <main className='flex'  id="project">
    <section className='left-section flex' >
      <button onClick={() => {
       setCurentactive("all");
       setARR(MyProjects)
      }} className={curentActive === "all" ? "active" : null}>All Project</button>


      <button onClick={() =>handleClicke("html" )
      } className={curentActive === "html" ? "active" : null}>HTML & CSS</button>


    
      <button onClick={() => handleClicke('js')
      } className={curentActive === "js" ? "active" : null}>JavaScript</button>



      <button onClick={() => handleClicke('react')}
       className={curentActive === "react" ? "active" : null}>React & MUI</button>



      <button onClick={() =>handleClicke('php')} className={curentActive === "php" ? "active" : null}>PHP & Laravel</button>
    </section>

    <section style={{flexWrap:'wrap' , gap:'1rem' , justifyContent:'center' } } className='rigth-section flex '>
      <AnimatePresence>
       {arr.map((item) => {
              return(<Card  img={item.imagPath} 
              title={item.projectTitle}  url={item.url} />)
       })}
       </AnimatePresence>
    </section>
  </main>
  )
}

export default Main
