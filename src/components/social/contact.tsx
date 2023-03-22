import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

function ContactLinks(): JSX.Element {
  return (
    <div className="flex flex-col items-end w-1/4 fixed right-2 top-1/2">
      <a
        href="https://www.linkedin.com/in/gonzalogorgojo"
        target="_blank"
        rel="noreferrer"
      >
        <FiLinkedin className="social-links" />
      </a>
      <a
        href="https://github.com/GonzaloGorgojo"
        target="_blank"
        rel="noreferrer"
      >
        <FiGithub className="social-links" />
      </a>
      <a href="mailto:gongorgojo@gmail.com">
        <FiMail className="social-links" />
      </a>
    </div>
  );
}

export default ContactLinks;
