import { useState } from 'react';

function PageIndex(): JSX.Element {
  const [isActive, setIsActive] = useState(1);

  return (
    <div className="flex flex-col items-start fixed left-2 top-1/2 w-1/4">
      <div className="relative">
        <a href="#header-container" onClick={() => setIsActive(1)}>
          <div
            className="index-circle rounded-full "
            style={{ backgroundColor: isActive === 1 ? '#64ffda' : '' }}
          />
        </a>
        <div className="index-top-line" />
        <a href="#footer-container" onClick={() => setIsActive(2)}>
          <div
            className="index-circle rounded-full "
            style={{ backgroundColor: isActive === 2 ? '#64ffda' : '' }}
          />
        </a>
        <div className="index-bottom-line" />
        <div
          className="index-circle rounded-full"
          style={{ backgroundColor: isActive === 3 ? '#64ffda' : '' }}
        />
      </div>
    </div>
  );
}

export default PageIndex;
