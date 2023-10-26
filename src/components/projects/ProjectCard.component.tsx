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
    <div
      className={
        tag === showTag ? 'projects-card w-1/3 md:w-3/12 sm:w-3/12 ' : 'hidden'
      }
    >
      <p className="projects-card-title text-sm md:text-lg ">{description}</p>
      <div className="projects-card-technos text-sm md:text-base text-center flex flex-wrap w-full justify-center">
        {technologies.map((t) => (
          <p key={t} className="mx-1">
            - {t}{' '}
          </p>
        ))}
      </div>
      <div className="flex flex-row  w-full justify-around mt-2 mb-1">
        <div className="flex flex-col">
          <p className="projects-icon-title text-sm md:text-base">Repo</p>
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
            <p className="projects-icon-title text-sm md:text-base">Demo</p>
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
