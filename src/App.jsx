import Header from './components/Header'
import TaskCard from './components/TaskCard'
import Gallery from './components/Gallery'
import Slideshow from './components/Slideshow'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-sky-50 text-gray-800">
      <Header />
      <TaskCard />
      <main id="gallery">
        <Gallery />
        <Slideshow />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App