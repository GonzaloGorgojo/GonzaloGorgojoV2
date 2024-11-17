import { useContext, useEffect, useRef } from 'react';
import { FiGithub } from 'react-icons/fi';
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
          <div key={p.id} className="border-b border-main-text-color mb-2">
            <h1 className="text-main-text-color">{p.title}</h1>
            <div className="flex flex-row  items-center space-x-4">
              <p className="text-alternative-text-color w-3/5">
                {p.description}
              </p>
              <a
                className="text-alternative-text-color h-7 w-7 text-2xl"
                href={p.repoLink}
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
