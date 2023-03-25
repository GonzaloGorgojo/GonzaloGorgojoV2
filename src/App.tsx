import WorkExperience from './components/experience/experience';
import Education from './components/education/education';
import Header from './components/header/header';
import PageIndex from './components/page-index/pageIndex';
import ContactLinks from './components/social/contact';
import ProjectScreen from './screens/projects/projects.screen';

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
