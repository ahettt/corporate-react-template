import Container from '../components/ui/Container'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import PolicyContent from '../components/sections/PolicyContent'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { QUALITY } from '../constants/quality'

export default function QualityPolicyPage() {
  useDocumentTitle('Політика якості')

  return (
    <Container className="pb-16 pt-8 md:pb-24 md:pt-12">
      <Breadcrumbs items={QUALITY.breadcrumbs} />
      <div className="mx-auto mt-6 max-w-3xl md:mt-8">
        <h1 className="text-4xl font-bold uppercase leading-tight text-ink md:text-6xl">
          {QUALITY.title}
        </h1>
        <div className="mt-6 h-1 w-full bg-accent" />
        <PolicyContent intro={QUALITY.intro} blocks={QUALITY.blocks} />
      </div>
    </Container>
  )
}
