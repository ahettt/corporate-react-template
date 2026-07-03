import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Container from '../components/ui/Container'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import EventTabs from '../components/sections/EventTabs'
import EventCard from '../components/sections/EventCard'
import EmptyEvents from '../components/sections/EmptyEvents'
import { UNIVERSITY, UNIVERSITY_EVENTS } from '../constants/university'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const TABS = [
  { key: 'records', label: UNIVERSITY.tabs.records },   // Записи заходів
  { key: 'schedule', label: UNIVERSITY.tabs.schedule }, // Розклад заходів
]

// хеш із мега-меню → ключ таба
// ⚠️ за прикладом: «Заходи для початківців» (#beginners) → «Розклад заходів».
//    Якщо треба навпаки — просто поміняй значення тут.
const HASH_TO_TAB = {
  beginners: 'schedule',
  universities: 'records',
}

export default function UniversityPage() {
  useDocumentTitle('Університет')
  const { hash } = useLocation()
  const [tab, setTab] = useState('records')

  useEffect(() => {
    const key = hash.replace('#', '')
    if (HASH_TO_TAB[key]) setTab(HASH_TO_TAB[key])
  }, [hash])

  return (
    <Container className="pb-16 md:pb-24">
      <div className="pt-8 md:pt-12">
        <Breadcrumbs items={UNIVERSITY.breadcrumbs} />
        <h1 className="mt-6 text-4xl font-bold uppercase leading-tight text-ink md:mt-8 md:text-6xl">
          {UNIVERSITY.title}
        </h1>
      </div>

      <EventTabs tabs={TABS} active={tab} onChange={setTab} />

      {tab === 'records' ? (
        <ul className="mt-8">
          {UNIVERSITY_EVENTS.map((event) => (
            <li key={event.href}>
              <EventCard event={event} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyEvents {...UNIVERSITY.emptySchedule} onCta={() => setTab('records')} />
      )}
    </Container>
  )
}