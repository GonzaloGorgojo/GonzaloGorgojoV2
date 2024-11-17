import RESUMEPDF from 'src/assets/resume.pdf';

function ResumeButton() {
  return (
    <div className="hover:bg-background-hover-color  text-main-text-color border-2 border-main-text-color rounded p-1.5 absolute top-5 right-5 font-mono md:fixed">
      <a href={RESUMEPDF} target="_blank" rel="noreferrer">
        <p>Resume</p>
      </a>
    </div>
  );
}

export default ResumeButton;
