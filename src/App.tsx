import ContactLinks from 'src/components/social/ContantLinks.component';
import ProjectScreen from 'src/screens/projects/projects.screen';
import PageIndex from 'src/components/page-index/PageIndex.component';
import AboutScreen from 'src/screens/about/about.screen';
import ExperienceScreen from 'src/screens/experience/experience.screen';
import FooterScreen from 'src/screens/footer/footer.screen';

function App(): JSX.Element {
  return (
    <div className="container">
      <PageIndex />
      <ContactLinks />
      <AboutScreen />
      <ExperienceScreen />
      <ProjectScreen />
      <FooterScreen />
    </div>
  );
}

export default App;
