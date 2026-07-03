import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import PrivacyContent from '../components/sections/PrivacyContent'
import { PRIVACY_META, PRIVACY_BLOCKS } from '../constants/privacy'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function PrivacyPolicyPage() {
  useDocumentTitle('Повідомлення про приватність')
  return (
    <Container className="py-10 md:py-16">
      <PageHeader breadcrumbs={PRIVACY_META.breadcrumbs} title={PRIVACY_META.title} />
      <div className="mt-10 max-w-3xl md:mt-14">
        <PrivacyContent blocks={PRIVACY_BLOCKS} />
      </div>
    </Container>
  )
}