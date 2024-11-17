import { useContext, useEffect, useRef } from 'react';
import Typed from 'react-typed';
import Avatar from 'src/assets/gon.png';
import { PagePositionEnum } from 'src/common/enums';
import useIsInViewport from 'src/common/helpers';
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
      className="bg-main-bg-color flex flex-col h-screen justify-center items-center"
    >
      <div className="w-2/4 sm:w-1/3 md:w-1/5 my-3 ">
        <img src={Avatar} className="h-auto w-full" alt="" />
      </div>

      <div className=" flex flex-col items-center mt-5">
        <h1 className="text-alternative-text-color font-mono text-base sm:text-xl">
          Hi, my name is{' '}
          <span className="text-main-text-color">Gonzalo Gorgojo</span> 👋
        </h1>
        <Typed
          className="text-alternative-text-color font-mono text-base sm:text-xl ml-1"
          strings={['I destroy.. Ups', 'I build Software 🤠']}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>

      <div className=" text-alternative-text-color  w-2/3 flex flex-col items-center mt-8">
        <p className="text-alternative-text-color text-justify font-serif text-base sm:text-xl">
          I&apos;m a{' '}
          <span className="text-main-text-color">
            Full Stack Software Developer
          </span>{' '}
          with five years of diverse experience in fintech, healthcare, transit
          and real estate sectors. Proven ability to collaborate effectively,
          delivering cutting-edge products that drive business growth.
          Specializing in enhancing scalability, efficiency, and overall
          performance to optimize outcomes. Outside of work, I enjoy exploring
          new technologies and staying active through sports.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
