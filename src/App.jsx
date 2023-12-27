import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar/>
      <div className="flex justify-center gap-5">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="mt-5">
        <Footer/>
      </div>
      
    </>
  )
}

export default App
