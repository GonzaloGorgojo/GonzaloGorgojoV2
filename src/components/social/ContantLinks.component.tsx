import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

function ContactLinks(): JSX.Element {
  return (
    <div className="flex flex-col items-end fixed right-1 top-1/2 md:right-2">
      <a
        href="https://www.linkedin.com/in/gonzalogorgojo"
        target="_blank"
        rel="noreferrer"
      >
        <FiLinkedin className="hover:text-main-text-color hover:text-3xl text-alternative-text-color m-2 text-2xl" />
      </a>
      <a
        href="https://github.com/GonzaloGorgojo"
        target="_blank"
        rel="noreferrer"
      >
        <FiGithub className="hover:text-main-text-color hover:text-3xl text-alternative-text-color m-2 text-2xl" />
      </a>
      <a href="mailto:gongorgojo@gmail.com">
        <FiMail className="hover:text-main-text-color hover:text-3xl text-alternative-text-color m-2 text-2xl" />
      </a>
    </div>
  );
}

export default ContactLinks;
