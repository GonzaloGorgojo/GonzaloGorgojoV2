import { ProjectTagEnum } from 'src/common/enums';

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
      <p>{description}</p>
      <p>{technologies}</p>
      <p>{repoLink}</p>
      <p>{demoLink}</p>
    </div>
  );
}

export default ProjectCard;
