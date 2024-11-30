import './Contact.css'
import Lottie from "lottie-react";
import { useForm, ValidationError } from '@formspree/react';
import doneAnimation from "../../animation/animationGmail.json"
import accepted from "../../animation/animationmesg.json"
const Contact = () => {
  const [state, handleSubmit] = useForm("mzblnzop");
 
  return (
   <section className=" contact-us" id="contact">
    <h1 className='title'>
      <span className='icon-email'></span>
      Contact Us 
    </h1>
     <p className='sub-title'>
      Contact us for more information and Get notified when i publish something new
     </p>
   
   <div className="flex" style={{marginTop:'2rem' ,justifyContent:'space-between'}}>
    <form className='form' onSubmit={handleSubmit}>
      <div className='flex inpute'>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      <div className='flex inpute '>
        <label htmlFor="message">Your message:</label>
        <textarea required name="message" id="message"></textarea>
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        {state.succeeded &&
       ( <p><Lottie style={{height:70}} animationData={accepted} ></Lottie></p>)}
      </div>
      <button className='submit'type='submit'  disabled={state.submitting}>
        {state.submitting ? "submiting..." : "submit"}</button>
     </form>
     <div className="animation ">
     <Lottie style={{height:500, }} animationData={doneAnimation} />
     </div>
   </div>
   </section>
  )
}

export default Contact