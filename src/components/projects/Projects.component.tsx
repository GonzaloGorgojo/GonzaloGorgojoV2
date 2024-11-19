import { useContext, useEffect, useRef } from 'react';
import { FiGithub, FiGlobe } from 'react-icons/fi';
import myprojects from 'src/assets/projects.json';
import { PagePositionEnum } from 'src/common/enums';
import useIsInViewport from 'src/common/helpers';
import DividierLine from 'src/components/common/DividerLine.component';
import PagePositionContext from 'src/context/PagePosition.context';

function ProjectSection(): JSX.Element {
  const projectsRef = useRef(null);
  const isInViewport = useIsInViewport(projectsRef, '0%');
  const projects = myprojects;

  const { setCurrentPosition } = useContext(PagePositionContext);

  useEffect(() => {
    if (isInViewport) {
      setCurrentPosition(PagePositionEnum.Projects);
    }
  }, [isInViewport, setCurrentPosition]);

  return (
    <div
      ref={projectsRef}
      id="projects"
      className="flex flex-col items-center bg-main-bg-color"
    >
      <DividierLine />

      <h2 className="mb-3 font-mono text-lg sm:text-xl text-alternative-text-color">
        What I&apos;ve Built
      </h2>

      <div className=" w-3/4 px-2">
        {projects.map((p) => (
          <div
            key={p.id}
            className="border-b  border-main-text-color mb-2  sm:py-1 pt-1 sm:pt-0"
          >
            <h1 className="text-main-text-color font-mono text-base text-center sm:text-start sm:text-xl my-1">
              {p.title}
            </h1>
            <div className="flex flex-col items-center sm:flex-row sm:justify-start sm:space-x-10">
              <div className="w-3/5 flex flex-col ">
                <p className="text-alternative-text-color text-justify sm:my-1 font-serif text-base sm:text-xl">
                  {p.description}
                </p>
                <div className="flex flex-row flex-wrap">
                  {p.technologies.map((t) => (
                    <p
                      key={t}
                      className="mr-2 my-1 text-main-text-color border border-main-text-color rounded-lg p-1 text-xs font-mono sm:text-base"
                    >
                      {t}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center p-2 ">
                  <p className="text-main-text-color mb-1 font-mono">Code</p>
                  <a
                    className="text-alternative-text-color hover:text-main-text-color h-7 w-7 text-2xl"
                    href={p.repoLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub />
                  </a>
                </div>
                {p.demoLink && (
                  <div className="flex flex-col p-2 items-center">
                    <p className="text-main-text-color mb-1 font-mono">Live</p>
                    <a
                      className="text-alternative-text-color hover:text-main-text-color h-7 w-7 text-2xl"
                      href={p.demoLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGlobe />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
