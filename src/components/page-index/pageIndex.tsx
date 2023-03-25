import { useState } from 'react';
import COLORS from '../../common/colors';

function PageIndex(): JSX.Element {
  const [isActive, setIsActive] = useState(1);

  return (
    <div className="flex flex-col items-start fixed left-2 top-1/2 w-1/4">
      <div className="relative">
        <a href="#about" onClick={() => setIsActive(1)}>
          <div
            className="index-circle rounded-full "
            style={{
              backgroundColor: isActive === 1 ? COLORS.mainTextColor : '',
            }}
          />
        </a>
        <div className="index-top-line" />
        <a href="#experience" onClick={() => setIsActive(2)}>
          <div
            className="index-circle rounded-full "
            style={{
              backgroundColor: isActive === 2 ? COLORS.mainTextColor : '',
            }}
          />
        </a>
        <div className="index-middle-line" />
        <a href="#projects" onClick={() => setIsActive(3)}>
          <div
            className="index-circle rounded-full"
            style={{
              backgroundColor: isActive === 3 ? COLORS.mainTextColor : '',
            }}
          />
        </a>
        <div className="index-bottom-line" />
        <a href="#education" onClick={() => setIsActive(4)}>
          <div
            className="index-circle rounded-full"
            style={{
              backgroundColor: isActive === 4 ? COLORS.mainTextColor : '',
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default PageIndex;
