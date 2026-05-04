import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Analytics from "./components/Analytics"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />

    </div>
  )
}

export default App
