import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

function ContactLinks(): JSX.Element {
  return (
    <div className="flex flex-col items-end fixed right-1 top-1/2 md:right-2">
      <a
        href="https://www.linkedin.com/in/gonzalogorgojo"
        target="_blank"
        rel="noreferrer"
      >
        <FiLinkedin className="social-links text-2xl" />
      </a>
      <a
        href="https://github.com/GonzaloGorgojo"
        target="_blank"
        rel="noreferrer"
      >
        <FiGithub className="social-links text-2xl" />
      </a>
      <a href="mailto:gongorgojo@gmail.com">
        <FiMail className="social-links text-2xl" />
      </a>
    </div>
  );
}

export default ContactLinks;
