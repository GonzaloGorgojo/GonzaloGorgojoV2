import React from 'react';
import { PagePositionEnum, ProjectTagEnum } from 'src/common/enums';

export interface Experience {
  id: number;
  position: string;
  company: string;
  companyLink: string;
  description: string[];
  start: string;
  end: string;
}

export interface Project {
  id: number;
  tag: ProjectTagEnum;
  technologies: string[];
  description: string;
  demoLink?: string;
  repoLink: string;
}

export type PagePositionContextType = {
  currentPosition: PagePositionEnum | null;
  setCurrentPosition: React.Dispatch<
    React.SetStateAction<PagePositionEnum | null>
  >;
};
