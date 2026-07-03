import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import PrivacyContent from '../components/sections/PrivacyContent'
import { PRIVACY_META, PRIVACY_BLOCKS } from '../constants/privacy'

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-10 md:py-16">
      <PageHeader breadcrumbs={PRIVACY_META.breadcrumbs} title={PRIVACY_META.title} />

      {/* Звужена колонка легал-тексту (ліво-вирівняна) для читабельності */}
      <div className="mt-10 max-w-3xl md:mt-14">
        <PrivacyContent blocks={PRIVACY_BLOCKS} />
      </div>
    </Container>
  )
}