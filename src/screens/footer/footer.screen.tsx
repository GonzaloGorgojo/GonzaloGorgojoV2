import { useContext, useEffect, useRef } from 'react';
import { PagePositionEnum } from 'src/common/enums';
import useIsInViewport from 'src/common/helpers';
import DividierLine from 'src/components/common/DividerLine.component';
import Education from 'src/components/footer/Education.component';
import Footer from 'src/components/footer/Footer.component';
import Skills from 'src/components/footer/Skills.component';
import PagePositionContext from 'src/context/PagePosition.context';

function FooterScreen() {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIsInViewport(footerRef, '-45%');

  const { setCurrentPosition } = useContext(PagePositionContext);

  useEffect(() => {
    if (isInViewport) {
      setCurrentPosition(PagePositionEnum.Footer);
    }
  }, [isInViewport, setCurrentPosition]);

  return (
    <div
      ref={footerRef}
      className="experience-container flex flex-col justify-center items-center"
    >
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
