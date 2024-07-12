import './App.css'
import About from './components/about'
import Carousel from './components/carousel'
import Footer from './components/footer'
import Header from './components/header'
import Packages from './components/packages'
import { FaArrowCircleUp } from "react-icons/fa";

function App() {
  return (
    <div className='min-h-screen w-full bg-[#B5DE97] relative'>
      <div className='w-full h-full mx-auto max-w-6xl'>
        <Header />
        <Carousel />
        <About />
        <Packages />
      </div>
      <Footer />
      <div className='fixed bottom-4 right-4 p-1 rounded-full cursor-pointer'>
        <FaArrowCircleUp size={26}/>
      </div>
    </div>
  )
}

export default App

// #1ABE67