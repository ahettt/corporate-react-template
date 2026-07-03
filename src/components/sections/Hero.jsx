import Container from '../ui/Container'
import Button from '../ui/Button'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80'

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden">
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="max-w-4xl font-display text-5xl font-medium uppercase leading-[1.1] text-white sm:text-6xl lg:text-7xl">
            Together everyone achieves more
          </h1>
          {/* Якір на секцію Contacts (id="contacts") нижче на сторінці */}
          <Button as="a" href="#contacts" size="lg" className="mt-10 uppercase tracking-wide">
            Зв'язатися з нами
          </Button>
        </div>
      </Container>

      {/* Індикатор скролу */}
      <div className="absolute inset-x-0 bottom-8 z-10" aria-hidden="true">
        <Container>
          <div className="flex justify-center lg:justify-start">
            <div className="relative h-14 w-7 rounded-full border-2 border-white">
              <span className="absolute left-1/2 top-2 h-1.5 w-1.5 rounded-full bg-white animate-scroll-bounce" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}