import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { cn } from '../../utils/cn'
import { LOGO_URL } from '../../constants/navigation'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Navbar from './Navbar'
import MegaMenu from './MegaMenu'
import MobileMenu from './MobileMenu'
import BurgerButton from './BurgerButton'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(null)
  const scrollY = useScrollPosition()
  const isScrolled = scrollY > 10

  const closePanel = () => setActiveSection(null)

  return (
    <header
      onMouseLeave={closePanel}
      className={cn(
        'sticky top-0 z-50 bg-white transition-shadow duration-300',
        isScrolled && 'shadow-md',
      )}
    >
      <Container className="relative flex h-20 items-center justify-between">
        {/* Лого */}
        <Link to="/" onMouseEnter={closePanel} className="flex items-center">
          <img src={LOGO_URL} alt="Yalantis" className="h-[47.44px] w-[86px]" />
        </Link>

        {/* Десктоп-навігація по центру */}
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <Navbar onSectionEnter={setActiveSection} />
        </div>

        {/* Права частина */}
        <div className="flex items-center gap-3" onMouseEnter={closePanel}>
          <Button
            as={Link}
            to="/vacancies"                        
            size="sm"
            className="uppercase tracking-wide lg:px-8 lg:py-3 lg:text-base"
          >
            Вакансії
          </Button>
          <BurgerButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen((v) => !v)} />
        </div>
      </Container>

      <div className="hidden lg:block">
        <MegaMenu activeSection={activeSection} />
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  )
}