import { ReactTypical } from '@deadcoder0904/react-typical';
import Avatar from '@/assets/gon.jpg';
import RESUMEPDF from '@/assets/resume.pdf';

function Header(): JSX.Element {
  return (
    <div
      id="header-container"
      className="header-container container flex flex-col h-screen justify-center items-center "
    >
      <div className="header-resume border-2 border-emerald-300 rounded p-1 absolute top-3 right-3">
        <a href={RESUMEPDF} target="_blank" rel="noreferrer">
          <p>Resume</p>
        </a>
      </div>

      <div className="w-1/5 my-3">
        <img src={Avatar} className="h-auto max-w-full" alt="" />
      </div>

      <div className=" flex flex-col items-center ">
        <h1 className="header-title text-xl">
          Hi, my name is <span>Gonzalo Gorgojo</span> 👋
        </h1>
        <ReactTypical
          className="header-title"
          steps={[
            'I Destroy 🖥️',
            1500,
            'Ups..',
            1500,
            'I Build Software 🤠',
            3000,
          ]}
          loop={Infinity}
          wrapper="h4"
        />
      </div>

      <div className=" header-title  w-2/3 flex flex-col items-center mt-8">
        <p className="header-content text-justify">
          I&apos;m a detail-oriented <span>software developer</span> passionate
          about creating exceptional products that meet user and client needs. I
          thrive in collaborative environments that foster innovation. Outside
          of work, I enjoy exploring new technologies, staying active through
          sports, and continuing to learn in my field.
        </p>
      </div>
    </div>
  );
}

export default Header;
