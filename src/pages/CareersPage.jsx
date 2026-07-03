import { useState } from 'react'
import Container from '../components/ui/Container'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import EventTabs from '../components/sections/EventTabs'
import EventCard from '../components/sections/EventCard'
import EmptyEvents from '../components/sections/EmptyEvents'
import { UNIVERSITY, UNIVERSITY_EVENTS } from '../constants/university'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const TABS = [
  { key: 'records', label: UNIVERSITY.tabs.records },
  { key: 'schedule', label: UNIVERSITY.tabs.schedule },
]

export default function UniversityPage() {
  useDocumentTitle('Університет')                         
  const [tab, setTab] = useState('records')


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