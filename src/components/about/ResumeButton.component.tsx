import RESUMEPDF from 'src/assets/resume.pdf';

function ResumeButton() {
  return (
    <div className="header-resume border-2 border-emerald-300 rounded p-1 absolute top-3 right-4">
      <a href={RESUMEPDF} target="_blank" rel="noreferrer">
        <p>Resume</p>
      </a>
    </div>
  );
}

export default ResumeButton;
