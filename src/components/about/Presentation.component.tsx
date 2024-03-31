import Avatar from 'src/assets/gon.jpg';
import Typed from 'react-typed';

function Presentation() {
  return (
    <>
      <div className="w-1/5 my-3">
        <img src={Avatar} className="h-auto max-w-full" alt="" />
      </div>

      <div className=" flex flex-col items-center ">
        <h1 className="header-title font-mono text-base sm:text-xl">
          Hi, my name is <span>Gonzalo Gorgojo</span> 👋
        </h1>
        <Typed
          className="typed-title font-mono text-base sm:text-xl ml-1"
          strings={['I destroy.. Ups', 'I build Software 🤠']}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>

      <div className=" header-title  w-2/3 flex flex-col items-center mt-8">
        <p className="header-content text-justify font-serif text-base sm:text-xl">
          I&apos;m a detail-oriented <span>software developer</span> passionate
          about creating exceptional products that meet user and client needs. I
          excel in collaborative environments where innovative solutions are
          fostered. Outside of work, I enjoy exploring new technologies and
          staying active through sports.
        </p>
      </div>
    </>
  );
}

export default Presentation;
