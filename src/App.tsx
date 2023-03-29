import ContactLinks from 'src/components/social/ContantLinks.component';
import ProjectScreen from 'src/screens/projects/projects.screen';
import PageIndex from 'src/components/page-index/PageIndex.component';
import AboutScreen from 'src/screens/about/about.screen';
import ExperienceScreen from 'src/screens/experience/experience.screen';
import FooterScreen from 'src/screens/footer/footer.screen';
import { useState } from 'react';
import PagePositionContext from './context/PagePosition.context';
import { PagePositionEnum } from './common/enums';

function App(): JSX.Element {
  const [currentPosition, setCurrentPosition] =
    useState<PagePositionEnum | null>(null);

  return (
    <div className="w-full">
      <PagePositionContext.Provider
        value={{
          currentPosition,
          setCurrentPosition,
        }}
      >
        <PageIndex />
        <ContactLinks />
        <AboutScreen />
        <ExperienceScreen />
        <ProjectScreen />
        <FooterScreen />
      </PagePositionContext.Provider>
    </div>
  );
}

export default App;
