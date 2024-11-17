import { DiGithubAlt } from 'react-icons/di';
import { FiFolder } from 'react-icons/fi';

function UserLinks() {
  return (
    <div className="w-full flex flex-col justify-center items-center text-alternative-text-color">
      <div className="flex flex-row ">
        <p>Built & Designed by </p>
        <a
          href="https://www.linkedin.com/in/gonzalogorgojo"
          target="_blank"
          rel="noreferrer"
          className="text-main-text-color"
        >
          <p className="hover:text-blue-300 ml-1">Gonzalo Gorgojo</p>
        </a>
      </div>
      <div className="my-2 w-1/5">
        <a
          href="https://github.com/GonzaloGorgojo/gonzalogorgojo.github.io"
          target="_blank"
          rel="noreferrer"
          className="text-main-text-color"
        >
          <p className="flex flex-row justify-around text-xl hover:text-blue-300">
            <DiGithubAlt /> <FiFolder />
          </p>
        </a>
      </div>
    </div>
  );
}

export default UserLinks;
