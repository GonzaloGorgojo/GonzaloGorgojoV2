import RESUMEPDF from 'src/assets/resume.pdf';

function ResumeButton() {
  return (
    <div className="resume-button border-2 border-emerald-300 rounded p-1.5 absolute top-5 left-5 font-mono">
      <a href={RESUMEPDF} target="_blank" rel="noreferrer">
        <p>Resume</p>
      </a>
    </div>
  );
}

export default ResumeButton;
