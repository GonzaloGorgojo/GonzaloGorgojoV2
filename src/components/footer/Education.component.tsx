import { BiLinkExternal } from 'react-icons/bi';
import educationData from 'src/assets/education.json';

function Education() {
  const education = educationData;

  return (
    <div
      id="footer"
      className="flex flex-col justify-between items-center w-3/4 mb-2"
    >
      <h2 className="font-mono text-lg sm:text-xl text-alternative-text-color">
        Education & Certifications
      </h2>
      <div className="w-full mt-4 grid grid-cols-[repeat(auto-fit,_16.666666%)] justify-center gap-4 ">
        {education.map((e) => {
          return (
            <div
              key={e.description}
              className="bg-alternative-bg-color border border-main-text-color rounded-lg flex flex-col items-center p-1 col-span-2 justify-center "
            >
              <p className=" text-center text-main-text-color text-sm font-mono">
                {e.description}
              </p>
              <div className="text-alternative-text-color">
                <a
                  href={e.certificationLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex flex-row justify-center items-center hover:text-indigo-300"
                >
                  <p className="my-1 mr-1 text-xs sm:text-base text-center font-mono">
                    {e.institution}
                  </p>

                  <BiLinkExternal />
                </a>
              </div>

              <p className="my-1 text-center text-alternative-text-color font-mono text-sm">
                {e.date}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
