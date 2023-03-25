import Avatar from 'src/assets/gon.jpg';
import { ReactTypical } from '@deadcoder0904/react-typical';

function Presentation() {
  return (
    <>
      <div className="w-1/5 my-3">
        <img src={Avatar} className="h-auto max-w-full" alt="" />
      </div>

      <div className=" flex flex-col items-center ">
        <h1 className="header-title text-xl">
          Hi, my name is <span>Gonzalo Gorgojo</span> 👋
        </h1>
        <ReactTypical
          className="header-title"
          steps={['I Destroy.. Ups', 2000, 'I Build Software 🤠', 3000]}
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
    </>
  );
}

export default Presentation;
