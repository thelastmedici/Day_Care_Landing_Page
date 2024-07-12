import './App.css'
import About from './components/about'
import Carousel from './components/carousel'
import Header from './components/header'
import Packages from './components/packages'

function App() {
  return (
    <div className='min-h-screen w-full bg-[#B5DE97] pb-20'>
      <div className='w-full h-full mx-auto max-w-6xl'>
        <Header />
        <Carousel />
        <About />
        <Packages />
      </div>
    </div>
  )
}

export default App

// #1ABE67