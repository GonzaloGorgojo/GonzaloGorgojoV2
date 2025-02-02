import RESUMEPDF from 'src/assets/resume.pdf';

function ResumeButton() {
  return (
    <a
      href={RESUMEPDF}
      target="_blank"
      rel="noreferrer"
      className="hover:bg-background-hover-color  text-main-text-color border-2 border-main-text-color rounded p-1.5 absolute top-5 right-5 font-mono md:fixed"
    >
      Resume
    </a>
  );
}

export default ResumeButton;
