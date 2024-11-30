import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
export const Button = () => {
    const [showscrollBtn, setshowscrollBtn] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
        console.log(window.scrollY);
        if (window.scrollY > 300)
        setshowscrollBtn(true);

        else 
        setshowscrollBtn(false)
        });
      }, [showscrollBtn]);
   
  return (
   <>

   <a style={{opacity: showscrollBtn? 1 : 0 , transition: "3s"}} href="#up">
   
    <button className='icon-keyboard_arrow_up scrool-up'></button></a>
   
   </>
  )
}
