import { useContext } from 'react';
import { MdEmojiPeople, MdWorkOutline } from 'react-icons/md';
import { TbCertificate, TbTools } from 'react-icons/tb';
import { PagePositionEnum } from 'src/common/enums';
import PagePositionContext from 'src/context/PagePosition.context';

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
            className={`${
              currentPosition === PagePositionEnum.About
                ? 'bg-main-text-color'
                : ''
            } hover:bg-background-hover-color border-main-text-color border mx-3 my-3 w-6 h-6 p-[3px] rounded-full`}
          >
            <MdEmojiPeople
              className={`${
                currentPosition === PagePositionEnum.About
                  ? 'text-main-bg-color'
                  : 'text-alternative-text-color'
              }`}
            />
          </div>
        </div>
        <div className="w-0.5 h-[14px] bg-main-text-color absolute left-[22px] top-9" />
        <div
          onClick={() => scrollToSection('experience')}
          onKeyDown={(e) => handleKeyDown(e, 'experience')}
          role="button"
          tabIndex={0}
          className="cursor-pointer"
          aria-label="Scroll to Experience section"
        >
          <div
            className={`${
              currentPosition === PagePositionEnum.Experience
                ? 'bg-main-text-color'
                : ''
            } hover:bg-background-hover-color border-main-text-color border mx-3 my-3 w-6 h-6 p-[3px] rounded-full`}
          >
            <MdWorkOutline
              className={`${
                currentPosition === PagePositionEnum.Experience
                  ? 'text-main-bg-color'
                  : 'text-alternative-text-color'
              }`}
            />
          </div>
        </div>
        <div className="w-0.5 h-[15px] bg-main-text-color absolute left-[22px] top-[70px]" />
        <div
          onClick={() => scrollToSection('projects')}
          onKeyDown={(e) => handleKeyDown(e, 'projects')}
          role="button"
          tabIndex={0}
          className="cursor-pointer"
          aria-label="Scroll to Projects section"
        >
          <div
            className={`${
              currentPosition === PagePositionEnum.Projects
                ? 'bg-main-text-color'
                : ''
            } hover:bg-background-hover-color border-main-text-color border mx-3 my-3 w-6 h-6 p-[3px] rounded-full`}
          >
            <TbTools
              className={`${
                currentPosition === PagePositionEnum.Projects
                  ? 'text-main-bg-color'
                  : 'text-alternative-text-color'
              }`}
            />
          </div>
        </div>
        <div className="w-0.5 h-3 bg-main-text-color absolute left-[22px] top-[109px]" />
        <div
          onClick={() => scrollToSection('footer')}
          onKeyDown={(e) => handleKeyDown(e, 'footer')}
          role="button"
          tabIndex={0}
          className="cursor-pointer"
          aria-label="Scroll to Footer section"
        >
          <div
            className={`${
              currentPosition === PagePositionEnum.Footer
                ? 'bg-main-text-color'
                : ''
            } hover:bg-background-hover-color border-main-text-color border mx-3 my-3 w-6 h-6 p-[3px] rounded-full`}
          >
            <TbCertificate
              className={`${
                currentPosition === PagePositionEnum.Footer
                  ? 'text-main-bg-color'
                  : 'text-alternative-text-color'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageIndex;
