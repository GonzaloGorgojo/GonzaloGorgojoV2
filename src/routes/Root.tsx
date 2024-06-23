import ContactLinks from 'src/components/social/ContantLinks.component';
import ProjectScreen from 'src/screens/projects/projects.screen';
import PageIndex from 'src/components/page-index/PageIndex.component';
import AboutScreen from 'src/screens/about/about.screen';
import ExperienceScreen from 'src/screens/experience/experience.screen';
import FooterScreen from 'src/screens/footer/footer.screen';
import { useMemo, useState } from 'react';
import { PagePositionEnum } from 'src/common/enums';
import PagePositionContext from 'src/context/PagePosition.context';
import ResumeButton from 'src/components/about/ResumeButton.component';

function Root(): JSX.Element {
  const [currentPosition, setCurrentPosition] =
    useState<PagePositionEnum | null>(null);

  const fireBaseProviderValue = useMemo(
    () => ({ currentPosition, setCurrentPosition }),
    [currentPosition, setCurrentPosition]
  );

  return (
    <div className="w-full">
      <PagePositionContext.Provider value={fireBaseProviderValue}>
        <ResumeButton />
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

export default Root;
