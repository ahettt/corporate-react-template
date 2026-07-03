// src/pages/NotFoundPage.jsx
import { Link } from 'react-router-dom'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
export default function NotFoundPage() {
  return (
    <Section>
      <Container className="text-center">
        <h1 className="font-display text-6xl font-bold text-accent">404</h1>
        <p className="mt-4 text-muted">Сторінку не знайдено.</p>
        <Button as={Link} to="/" className="mt-8">На головну</Button>
      </Container>
    </Section>
  )
}