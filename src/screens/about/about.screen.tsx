import Presentation from 'src/components/about/Presentation.component';
import ResumeButton from 'src/components/about/ResumeButton.component';

function AboutScreen() {
  return (
    <div
      id="about"
      className="header-container container flex flex-col h-screen justify-center items-center "
    >
      <ResumeButton />
      <Presentation />
    </div>
  );
}

export default AboutScreen;
