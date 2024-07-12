import './App.css'
import Carousel from './components/carousel'
import Header from './components/header'

function App() {
  return (
    <div className='min-h-screen w-full bg-[#B5DE97]'>
      <div className='w-full h-full mx-auto max-w-6xl'>
        <Header />
        <Carousel />
      </div>
    </div>
  )
}

export default App
