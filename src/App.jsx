import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Dishes from "./components/Dishes"
import About from "./components/About"


import Review from "./components/Review"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

function App() {


  return (
   <main className="overflow-y-hidden text-neutral-200 antialiased">
    <HeroSection />
    <Navbar />
    <Dishes />
    <About />
         <Review />
      <ContactSection />
      <Footer />
   </main>
  )
}

export default App
