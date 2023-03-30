import COLORS from 'src/common/colors';
import ProjectCard from 'src/components/projects/ProjectCard.component';
import TitleBar from 'src/components/projects/TitleBar.component';
import projectsData from 'src/assets/projects.json';
import { Project } from 'src/common/types';
import { PagePositionEnum, ProjectTagEnum } from 'src/common/enums';
import { useContext, useEffect, useRef, useState } from 'react';
import DividierLine from 'src/components/common/DividerLine.component';
import useIsInViewport from 'src/common/helpers';
import PagePositionContext from 'src/context/PagePosition.context';

function ProjectScreen(): JSX.Element {
  const [projectsTag, setProjectsTag] = useState<ProjectTagEnum>(
    ProjectTagEnum.BackEnd
  );
  const projects: Project[] = projectsData.map((p) => ({
    ...p,
    tag: p.tag as ProjectTagEnum,
  }));

  const projectsRef = useRef(null);
  const isInViewport = useIsInViewport(projectsRef, '0%');

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
      className="projects-container flex flex-col items-center py-3"
    >
      <DividierLine />

      <h2
        className="mb-3 font-mono text-lg sm:text-xl"
        style={{ color: COLORS.alternativeTextColor }}
      >
        What I&apos;ve Built
      </h2>
      <div className="w-3/4 mb-5">
        <TitleBar setProjectsTag={setProjectsTag} />
      </div>
      <div className="w-3/4 flex flex-wrap justify-center">
        {projects.map((p) => {
          return (
            <ProjectCard
              key={p.id}
              description={p.description}
              technologies={p.technologies}
              repoLink={p.repoLink}
              demoLink={p.demoLink ? p.demoLink : ''}
              tag={p.tag}
              showTag={projectsTag}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectScreen;
