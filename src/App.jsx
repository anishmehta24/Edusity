import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/footer'
import VideoPlayer from './components/Video/VideoPlayer'



function App() {
  const [playState,setPlayState] = useState(false)


  return (
    <>
      <div>
       <Navbar/>
       <Hero/>
       <div className="container">
        <Title subTitle='Our Programs' title='What We Offer'/>
       <Programs/>
       <About setPlayState = {setPlayState}/>
       <Title subTitle='Gallery' title='Campus Photos'/>
       <Campus/>
       <Title subTitle='Testimonials' title='What Students Says'/>
       <Testimonials/>
       <Title subTitle='Contact Us' title='Get in Touch'/>
       <Contact/>
       <Footer/>
       </div>
       <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      </div>
    </>
  )
}

export default App