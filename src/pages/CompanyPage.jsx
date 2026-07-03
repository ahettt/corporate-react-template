import AboutHero from '../components/sections/AboutHero'
import YalantisLife from '../components/sections/YalantisLife'
import AboutValues from '../components/sections/AboutValues'
import AboutExcellence from '../components/sections/AboutExcellence'
import AboutTeam from '../components/sections/AboutTeam'
import AboutSocial from '../components/sections/AboutSocial'
import AboutContribution from '../components/sections/AboutContribution'
import AboutClients from '../components/sections/AboutClients'
import { useDocumentTitle } from '../hooks/useDocumentTitle'          // +
import { MISSION_IMAGES, MISSION_CONTENT } from '../constants/company'

export default function CompanyPage() {
  useDocumentTitle('Про нас')                                          // +
  return (
    <>
      <AboutHero />
      <YalantisLife images={MISSION_IMAGES} content={MISSION_CONTENT} />
      <AboutValues />
      <AboutExcellence />
      <AboutTeam />
      <AboutSocial />
      <AboutContribution />
      <AboutClients />
      {/* наступні секції — сюди */}
    </>
  )
}