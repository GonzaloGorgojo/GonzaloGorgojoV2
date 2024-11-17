import { useContext } from 'react';
import COLORS from 'src/common/colors';
import { PagePositionEnum } from 'src/common/enums';
import PagePositionContext from 'src/context/PagePosition.context';
import { MdEmojiPeople, MdWorkOutline } from 'react-icons/md';
import { TbCertificate, TbTools } from 'react-icons/tb';

function PageIndex(): JSX.Element {
  const { currentPosition } = useContext(PagePositionContext);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, id: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToSection(id);
    }
  };

  return (
    <div className="flex flex-col fixed left-1 md:left-2 top-1/2">
      <div className="relative">
        <div
          onClick={() => scrollToSection('about')}
          onKeyDown={(e) => handleKeyDown(e, 'about')}
          role="button"
          tabIndex={0}
          className="cursor-pointer"
          aria-label="Scroll to About section"
        >
          <div
            className="index-circle rounded-full"
            style={{
              backgroundColor:
                currentPosition === PagePositionEnum.About
                  ? COLORS.mainTextColor
                  : '',
            }}
          >
            <MdEmojiPeople
              style={{
                color:
                  currentPosition === PagePositionEnum.About
                    ? COLORS.mainBgColor
                    : COLORS.alternativeTextColor,
              }}
            />
          </div>
        </div>
        <div className="index-top-line" />
        <div
          onClick={() => scrollToSection('experience')}
          onKeyDown={(e) => handleKeyDown(e, 'experience')}
          role="button"
          tabIndex={0}
          className="cursor-pointer"
          aria-label="Scroll to Experience section"
        >
          <div
            className="index-circle rounded-full"
            style={{
              backgroundColor:
                currentPosition === PagePositionEnum.Experience
                  ? COLORS.mainTextColor
                  : '',
            }}
          >
            <MdWorkOutline
              style={{
                color:
                  currentPosition === PagePositionEnum.Experience
                    ? COLORS.mainBgColor
                    : COLORS.alternativeTextColor,
              }}
            />
          </div>
        </div>
        <div className="index-middle-line" />
        <div
          onClick={() => scrollToSection('projects')}
          onKeyDown={(e) => handleKeyDown(e, 'projects')}
          role="button"
          tabIndex={0}
          className="cursor-pointer"
          aria-label="Scroll to Projects section"
        >
          <div
            className="index-circle rounded-full"
            style={{
              backgroundColor:
                currentPosition === PagePositionEnum.Projects
                  ? COLORS.mainTextColor
                  : '',
            }}
          >
            <TbTools
              style={{
                color:
                  currentPosition === PagePositionEnum.Projects
                    ? COLORS.mainBgColor
                    : COLORS.alternativeTextColor,
              }}
            />
          </div>
        </div>
        <div className="index-bottom-line" />
        <div
          onClick={() => scrollToSection('footer')}
          onKeyDown={(e) => handleKeyDown(e, 'footer')}
          role="button"
          tabIndex={0}
          className="cursor-pointer"
          aria-label="Scroll to Footer section"
        >
          <div
            className="index-circle rounded-full"
            style={{
              backgroundColor:
                currentPosition === PagePositionEnum.Footer
                  ? COLORS.mainTextColor
                  : '',
            }}
          >
            <TbCertificate
              style={{
                color:
                  currentPosition === PagePositionEnum.Footer
                    ? COLORS.mainBgColor
                    : COLORS.alternativeTextColor,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageIndex;
