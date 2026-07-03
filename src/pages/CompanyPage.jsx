import AboutHero from '../components/sections/AboutHero'
import YalantisLife from '../components/sections/YalantisLife'
import AboutValues from '../components/sections/AboutValues'
import AboutExcellence from '../components/sections/AboutExcellence'
import AboutTeam from '../components/sections/AboutTeam'
import AboutSocial from '../components/sections/AboutSocial'
import AboutContribution from '../components/sections/AboutContribution'
import AboutClients from '../components/sections/AboutClients'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { MISSION_IMAGES, MISSION_CONTENT } from '../constants/company'

export default function CompanyPage() {
  useDocumentTitle('Про нас')
  return (
    <>
      <div id="about" className="scroll-mt-24"><AboutHero /></div>
      <div id="mission" className="scroll-mt-24">
        <YalantisLife images={MISSION_IMAGES} content={MISSION_CONTENT} />
      </div>
      <div id="values" className="scroll-mt-24"><AboutValues /></div>
      <AboutExcellence />
      <div id="team" className="scroll-mt-24"><AboutTeam /></div>
      <div id="social" className="scroll-mt-24"><AboutSocial /></div>
      <div id="impact" className="scroll-mt-24"><AboutContribution /></div>
      <div id="clients" className="scroll-mt-24"><AboutClients /></div>
    </>
  )
}