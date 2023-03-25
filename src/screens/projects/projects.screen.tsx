import COLORS from 'src/common/colors';
import ProjectCard from 'src/components/projects/ProjectCard.component';
import TitleBar from 'src/components/projects/TitleBar.component';
import projectsData from 'src/assets/projects.json';
import { Project } from 'src/common/types';
import { ProjectTagEnum } from 'src/common/enums';
import { useState } from 'react';

function ProjectScreen(): JSX.Element {
  const [projectsTag, setProjectsTag] = useState<ProjectTagEnum>(
    ProjectTagEnum.Mobile
  );
  const projects: Project[] = projectsData.map((p) => ({
    ...p,
    tag: p.tag as ProjectTagEnum,
  }));

  return (
    <div
      id="projects"
      className="projects-container container flex flex-col items-center h-screen py-3"
    >
      <h2
        className="text-2xl mb-3"
        style={{ color: COLORS.alternativeTextColor }}
      >
        What I&apos;ve Built
      </h2>
      <div className="w-3/4 mb-5">
        <TitleBar setProjectsTag={setProjectsTag} />
      </div>
      <div className="w-3/4 grid grid-cols-2">
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
