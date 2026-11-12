import SiteShell from './components/SiteShell';
import Hero from './components/Hero';
import NameComparison from './components/NameComparison';
import AboutMe from './components/ProfessionalIntro';
import PronunciationGuide from './components/PronunciationGuide';
import FunFacts from './components/FunFacts';
import RozziHistory from './components/RozziHistory';
import EmailCatchAll from './components/EmailCatchAll';
import Faq from './components/Faq';
import MainSiteLinks from './components/MainSiteLinks';
import ShareBar from './components/ShareBar';
import CallToAction from './components/CallToAction';
import { useShare } from './hooks/useShare';

const pronunciationGuide = [
  { incorrect: 'ROH-zee', correct: 'ROZ-zee' },
  { incorrect: 'ROSS-ee', correct: 'ROZ-zee' },
  { incorrect: 'ROH-see', correct: 'ROZ-zee' },
];

const funFacts = [
  {
    id: 1,
    text: 'The surname Rozzi has Italian origins, primarily from central Italy.',
  },
  {
    id: 2,
    text: 'While "Rossi" (with one Z) is one of the most common Italian surnames, "Rozzi" (with two Zs) is much less common.',
  },
  {
    id: 3,
    text: 'I\'ve received countless emails, letters, and even official documents with my name misspelled as "Rossi"!',
  },
  {
    id: 4,
    text: 'It still happens: the program for the 2026 New Jersey League of Municipalities Conference lists the presenter of the NJHOMES Atlas session as "Gavin Rossi."',
    link: {
      href: 'https://www.gavinrozzi.com/media/njlm-conference-njhomes-atlas-2026/',
      label: 'See the session',
    },
  },
];

function App() {
  const { handleShare } = useShare();

  return (
    <SiteShell>
      <Hero />
      <NameComparison />
      <AboutMe />
      <PronunciationGuide pronunciationGuide={pronunciationGuide} />
      <FunFacts facts={funFacts} />
      <RozziHistory />
      <EmailCatchAll />
      <Faq />
      <MainSiteLinks />
      <ShareBar onShare={handleShare} />
      <CallToAction />
    </SiteShell>
  );
}

export default App;
