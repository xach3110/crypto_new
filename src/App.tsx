import { useEffect } from 'react';
import { initScrollReveal } from './utils/scrollReveal';

import { HeroSection } from './components/first';
import { AcademyReasons } from './components/AcademyReasons';
import { EducationSteps } from './components/EducationSteps';
import TrainingResults from './components/TrainingResults';
import LanguageSwitcherModal from './components/LanguageSwitcherModal';
import './i18n'

function App() {

  useEffect(() => {
    initScrollReveal(); // теперь точно после монтирования всех дочерних компонентов
  }, []);

  return (
    <>
      <LanguageSwitcherModal />
      <HeroSection />
      <AcademyReasons />
      <EducationSteps />
      <TrainingResults />
    </>
  );
}

export default App;
