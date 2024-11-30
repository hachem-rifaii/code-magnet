import { motion } from "framer-motion";
import Header from './Component/1-Header/Header'
import Hero from './Component/2-Hero/Hero'
import Main from './Component/3-Main/Main'
import Contact from './Component/4-contact/Contact'
import Footer from './Component/5-footer/Footer'
import { Button } from './Button'

const App = () => {
  
  return (
<motion.div
initial={{ opacity: 0, y: -80 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 2}}


className='container' id='up'>
   <Header />
   
   <Hero />
   <div className='divider'/>
   <Main />
   <div className='divider'/>
   <Contact />  
   <div className='divider'/>
   <Footer /> 
  <Button />
   </motion.div>
  )
}

export default App