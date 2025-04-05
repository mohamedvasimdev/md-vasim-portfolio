import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Recentwork from './components/Recentwork'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <Home />
        <About />
        <Recentwork />
      </div>
      <Footer />
    </>
  )

}

export default App
