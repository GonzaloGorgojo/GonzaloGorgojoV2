import RESUMEPDF from 'src/assets/resume.pdf';

function ResumeButton() {
  return (
    <div className="resume-button border-2 border-emerald-300 rounded p-1.5 absolute top-10 left-14 sm:left-24 md:left-52 font-mono">
      <a href={RESUMEPDF} target="_blank" rel="noreferrer">
        <p>Resume</p>
      </a>
    </div>
  );
}

export default ResumeButton;
