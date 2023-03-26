import DividierLine from 'src/components/common/DividerLine.component';
import Education from 'src/components/footer/Education.component';
import Footer from 'src/components/footer/Footer.component';
import Skills from 'src/components/footer/Skills.component';

function FooterScreen() {
  return (
    <div className="experience-container flex flex-col justify-center items-center">
      <DividierLine />
      <Skills />
      <DividierLine />
      <Education />
      <DividierLine />
      <Footer />
    </div>
  );
}

export default FooterScreen;
