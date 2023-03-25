import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsLaptop } from 'react-icons/bs';
import experienceData from '../../assets/experience.json';
import { Experience } from '../../common/types';
import COLORS from '../../common/colors';

function ExperienceScreen(): JSX.Element {
  const experience: Experience[] = experienceData;

  return (
    <div
      id="experience"
      className="experience-container container flex flex-col justify-center items-center "
    >
      <div className="experience-line" />
      <h2
        className="text-2xl mb-3"
        style={{ color: COLORS.alternativeTextColor }}
      >
        Where I&apos;ve Worked
      </h2>
      <div className="w-3/4">
        <VerticalTimeline lineColor={`${COLORS.alternativeTextColor}`}>
          {experience.map((e) => {
            return (
              <VerticalTimelineElement
                key={e.id}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: COLORS.alternativeBgColor,
                  color: COLORS.alternativeTextColor,
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${COLORS.alternativeTextColor}`,
                }}
                date={`${e.start} - ${e.end} `}
                iconStyle={{
                  background: COLORS.alternativeBgColor,
                  color: COLORS.alternativeTextColor,
                }}
                icon={<BsLaptop />}
              >
                <h3
                  className="vertical-timeline-element-title"
                  style={{ color: COLORS.mainTextColor }}
                >
                  {e.position}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  @{' '}
                  <a
                    className="experience-company-link"
                    href={e.companyLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {e.company}
                  </a>
                </h4>
                <p style={{ color: COLORS.alternativeTextColor }}>
                  {e.description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
      <div className="experience-line" />
    </div>
  );
}

export default ExperienceScreen;
