// src/pages/CaseDetailPage.jsx
import { useParams } from 'react-router-dom'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
export default function CaseDetailPage() {
  const { slug } = useParams()
  return (<Section><Container><h1 className="font-display text-4xl font-bold text-ink">Case: {slug}</h1></Container></Section>)
}