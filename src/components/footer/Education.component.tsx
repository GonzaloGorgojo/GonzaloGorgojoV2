import COLORS from 'src/common/colors';
import educationData from 'src/assets/education.json';
import EducationCard from 'src/components/footer/EducationCard.component';

function Education() {
  const education = educationData;

  return (
    <div
      id="footer"
      className="flex flex-col justify-between items-center w-3/4 mb-2"
    >
      <h2
        className="font-mono text-lg sm:text-xl"
        style={{ color: COLORS.alternativeTextColor }}
      >
        Education & Certifications
      </h2>
      <div className="w-full mt-4 grid grid-cols-[repeat(auto-fit,_16.666666%)] justify-center gap-4 ">
        {education.map((e) => {
          return (
            <EducationCard
              key={e.id}
              institution={e.institution}
              description={e.description}
              certificationLink={e.certificationLink}
              date={e.date}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Education;
