import WorkExperience from 'src/components/experience/experience';
import Education from 'src/components/education/education';
import Header from 'src/components/header/header';
import ContactLinks from 'src/components/social/ContantLinks.component';
import ProjectScreen from 'src/screens/projects/projects.screen';
import PageIndex from 'src/components/page-index/PageIndex.component';

function App(): JSX.Element {
  return (
    <div className="container">
      <PageIndex />
      <ContactLinks />
      <Header />
      <WorkExperience />
      <ProjectScreen />
      <Education />
    </div>
  );
}

export default App;
