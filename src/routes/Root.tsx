import ContactLinks from 'src/components/social/ContantLinks.component';
import PageIndex from 'src/components/page-index/PageIndex.component';
import { useMemo, useState } from 'react';
import { PagePositionEnum } from 'src/common/enums';
import PagePositionContext from 'src/context/PagePosition.context';
import ResumeButton from 'src/components/about/ResumeButton.component';
import ProjectSection from 'src/components/projects/Projects.component';
import FooterSection from 'src/components/footer/Footer.component';
import ExperienceSection from 'src/components/experience/Experience.component';
import AboutSection from 'src/components/about/About.component';

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
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
        <FooterSection />
      </PagePositionContext.Provider>
    </div>
  );
}

export default Root;
