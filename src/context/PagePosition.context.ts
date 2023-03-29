import { createContext } from 'react';
import { PagePositionContextType } from 'src/common/types';

const PagePositionContextState = {
  currentPosition: null,
  setCurrentPosition: () => {},
};

const PagePositionContext = createContext<PagePositionContextType>(
  PagePositionContextState
);

export default PagePositionContext;
