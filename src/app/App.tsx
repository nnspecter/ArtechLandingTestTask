import './App.css'
import { Hero } from '@/widgets/Hero'
import { Advantages } from '@/widgets/Advantages'
import Header from '../widgets/Header/ui/Header'
import { Products } from '@/widgets/Products'
import { Faq } from '@/widgets/Faq'
import Testimonials from '@/widgets/Testimonials/ui/Testimonials'
import { Footer } from '@/widgets/Footer'
import { Contacts } from '@/widgets/Contacts'
import { ThemeProvider } from './context/ThemeProvider'


function App() {

  return (
    <ThemeProvider>
      <Header/>
      <Hero/>
      <Advantages/>
      <Products/>
      <Testimonials/>
      <Faq/>
      <Contacts/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App
