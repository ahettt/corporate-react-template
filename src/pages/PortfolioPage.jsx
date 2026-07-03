import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Container from '../components/ui/Container'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import EventTabs from '../components/sections/EventTabs'
import EventCard from '../components/sections/EventCard'
import EmptyEvents from '../components/sections/EmptyEvents'
import { EVENTS, EVENTS_RECORDS } from '../constants/events'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

// хеш із мега-меню → ключ таба
const HASH_TO_TAB = {
  ua: 'ukraine',
  pl: 'poland',
  cy: 'cyprus',
  records: 'records',
}

export default function EventsPage() {
  useDocumentTitle('Заходи')
  const { hash } = useLocation()
  const [tab, setTab] = useState('records')

  // #cy → таб «Заходи на Кіпрі» тощо
  useEffect(() => {
    const key = hash.replace('#', '')
    if (HASH_TO_TAB[key]) setTab(HASH_TO_TAB[key])
  }, [hash])

  return (
    <Container className="pb-16 md:pb-24">
      {/* ⚠️ декоративний фон-патерн у шапці — хук лишено (URL асета невідомий) */}
      <div className="pt-8 md:pt-12">
        <Breadcrumbs items={EVENTS.breadcrumbs} />
        <h1 className="mt-6 text-4xl font-bold uppercase leading-tight text-ink md:mt-8 md:text-6xl">
          {EVENTS.title}
        </h1>
      </div>

      <EventTabs tabs={EVENTS.tabs} active={tab} onChange={setTab} />

      {tab === 'records' ? (
        <ul className="mt-8">
          {EVENTS_RECORDS.map((event) => (
            <li key={event.href}>
              <EventCard event={event} mediaClassName="aspect-[425/235] md:w-[425px]" />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyEvents {...EVENTS.empty} onCta={() => setTab('records')} />
      )}
    </Container>
  )
}