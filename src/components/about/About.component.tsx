import { useContext, useEffect, useRef } from 'react';
import { PagePositionEnum } from 'src/common/enums';
import useIsInViewport from 'src/common/helpers';
import Presentation from 'src/components/about/Presentation.component';
import PagePositionContext from 'src/context/PagePosition.context';

function AboutSection() {
  const aboutRef = useRef(null);
  const isInViewport = useIsInViewport(aboutRef, '10%');
  const { setCurrentPosition } = useContext(PagePositionContext);

  useEffect(() => {
    if (isInViewport) {
      setCurrentPosition(PagePositionEnum.About);
    }
  }, [isInViewport, setCurrentPosition]);

  return (
    <div
      ref={aboutRef}
      id="about"
      className="about-container flex flex-col h-screen justify-center items-center"
    >
      <Presentation />
    </div>
  );
}

export default AboutSection;
