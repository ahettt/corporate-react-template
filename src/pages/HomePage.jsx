import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Offices from '../components/sections/Offices'
import Gallery from '../components/sections/Gallery'
import Benefits from '../components/sections/Benefits'
import YalantisLife from '../components/sections/YalantisLife'
import Contacts from '../components/sections/Contacts'
import { useDocumentTitle } from '../hooks/useDocumentTitle' 

export default function HomePage() {
  useDocumentTitle('Головна')  
  return (
    <>
      <Hero />
      <About />
      <Offices />
      <Gallery />
      <Benefits />
      <YalantisLife /> 
      <Contacts /> 
    </>
  )
}