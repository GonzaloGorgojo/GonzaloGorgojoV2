import { useContext, useState } from 'react';
import COLORS from 'src/common/colors';
import { PagePositionEnum } from 'src/common/enums';
import PagePositionContext from 'src/context/PagePosition.context';

function PageIndex(): JSX.Element {
  const { currentPosition } = useContext(PagePositionContext);

  return (
    <div className="flex flex-col fixed left-2 top-1/2">
      <div className="relative">
        <a href="#about">
          <div
            className="index-circle rounded-full "
            style={{
              backgroundColor:
                currentPosition === PagePositionEnum.About
                  ? COLORS.mainTextColor
                  : '',
            }}
          />
        </a>
        <div className="index-top-line" />
        <a href="#experience">
          <div
            className="index-circle rounded-full "
            style={{
              backgroundColor:
                currentPosition === PagePositionEnum.Experience
                  ? COLORS.mainTextColor
                  : '',
            }}
          />
        </a>
        <div className="index-middle-line" />
        <a href="#projects">
          <div
            className="index-circle rounded-full"
            style={{
              backgroundColor:
                currentPosition === PagePositionEnum.Projects
                  ? COLORS.mainTextColor
                  : '',
            }}
          />
        </a>
        <div className="index-bottom-line" />
        <a href="#footer">
          <div
            className="index-circle rounded-full"
            style={{
              backgroundColor:
                currentPosition === PagePositionEnum.Footer
                  ? COLORS.mainTextColor
                  : '',
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default PageIndex;
