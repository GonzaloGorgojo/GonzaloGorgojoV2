import { useContext, useEffect, useRef } from 'react';
import { BsLaptop } from 'react-icons/bs';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experienceData from 'src/assets/experience.json';
import { PagePositionEnum } from 'src/common/enums';
import useIsInViewport from 'src/common/helpers';
import { Experience } from 'src/common/types';
import DividierLine from 'src/components/common/DividerLine.component';
import PagePositionContext from 'src/context/PagePosition.context';

function ExperienceSection(): JSX.Element {
  const experience: Experience[] = experienceData;
  const experienceRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIsInViewport(experienceRef, '-50%');

  const { setCurrentPosition } = useContext(PagePositionContext);

  useEffect(() => {
    if (isInViewport) {
      setCurrentPosition(PagePositionEnum.Experience);
    }
  }, [isInViewport, setCurrentPosition]);

  return (
    <div
      id="experience"
      className="bg-main-bg-color flex flex-col justify-center items-center "
    >
      <DividierLine />
      <h2
        className="mb-3 font-mono text-lg sm:text-xl text-alternative-text-color"
        ref={experienceRef}
      >
        Where I&apos;ve Worked
      </h2>
      <div className="w-4/5">
        <VerticalTimeline lineColor="#ccd6f6">
          {experience.map((e) => {
            return (
              <VerticalTimelineElement
                key={e.id}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: '#263a7d',
                  color: '#64ffda',
                }}
                contentArrowStyle={{
                  borderRight: `7px solid #ccd6f6`,
                }}
                date={`${e.start} - ${e.end} `}
                iconStyle={{
                  background: '#263a7d',
                  color: '#ccd6f6',
                }}
                icon={<BsLaptop />}
              >
                <h3 className="vertical-timeline-element-title text-lg sm:text-xl text-main-text-color">
                  {e.position}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  @{' '}
                  <a
                    className="hover:text-main-text-color text-link-color"
                    href={e.companyLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {e.company}
                  </a>
                </h4>
                <p className="text-alternative-text-color">
                  {e.description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default ExperienceSection;
