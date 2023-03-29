import { ProjectTagEnum } from 'src/common/enums';
import { FiGithub, FiGlobe } from 'react-icons/fi';

type Props = {
  showTag: ProjectTagEnum;
  tag: ProjectTagEnum;
  technologies: string[];
  description: string;
  demoLink: string;
  repoLink: string;
};

function ProjectCard(props: Props) {
  const { tag, technologies, demoLink, repoLink, description, showTag } = props;

  return (
    <div className={tag === showTag ? 'projects-card' : 'hidden'}>
      <h3 className="projects-card-title">{description}</h3>
      <div className="projects-card-technos">
        {technologies.map((t) => (
          <p key={t}>- {t}</p>
        ))}
      </div>
      <div className="flex flex-row  w-full justify-around mt-2 mb-1">
        <div className="flex flex-col">
          <p className="projects-icon-title">Repo</p>
          <a
            className="projects-icon-link"
            href={repoLink}
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
        </div>

        {demoLink ? (
          <div className="flex flex-col">
            <p className="projects-icon-title">Demo</p>
            <a
              className="projects-icon-link"
              href={demoLink}
              target="_blank"
              rel="noreferrer"
            >
              <FiGlobe />
            </a>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
