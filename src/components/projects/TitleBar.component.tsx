import { Dispatch, SetStateAction, useState } from 'react';
import { ProjectTagEnum } from 'src/common/enums';

type Props = {
  setProjectsTag: Dispatch<SetStateAction<ProjectTagEnum>>;
};

function TitleBar({ setProjectsTag }: Props): JSX.Element {
  const [active, setActive] = useState<number>(3);
  const titles = [
    { id: 1, title: ProjectTagEnum.FrontEnd },
    { id: 2, title: ProjectTagEnum.Mobile },
    { id: 3, title: ProjectTagEnum.BackEnd },
  ];

  const setActiveProjectsType = (type: { id: number; title: string }) => {
    setProjectsTag(type.title as ProjectTagEnum);
    setActive(type.id);
  };

  return (
    <div className="flex flex-row space-x-2 mx-4">
      {titles.map((t) => (
        <button
          key={t.id}
          type="button"
          className={
            active === t.id
              ? 'projects-button-active transition-all duration-1000 basis-1/2'
              : 'projects-button-inactive transition-all duration-1000 basis-1/4'
          }
          onClick={() => setActiveProjectsType(t)}
        >
          {t.title}
        </button>
      ))}
    </div>
  );
}

export default TitleBar;
