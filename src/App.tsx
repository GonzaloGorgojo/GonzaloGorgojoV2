import Education from 'src/components/education/education';
import ContactLinks from 'src/components/social/ContantLinks.component';
import ProjectScreen from 'src/screens/projects/projects.screen';
import PageIndex from 'src/components/page-index/PageIndex.component';
import AboutScreen from 'src/screens/about/about.screen';
import ExperienceScreen from './screens/experience/experience.screen';

function App(): JSX.Element {
  return (
    <div className="container">
      <PageIndex />
      <ContactLinks />
      <AboutScreen />
      <ExperienceScreen />
      <ProjectScreen />
      <Education />
    </div>
  );
}

export default App;
