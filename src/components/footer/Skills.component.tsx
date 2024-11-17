import { AiOutlineConsoleSql } from 'react-icons/ai';
import { DiNodejs } from 'react-icons/di';
import { FaAws, FaDocker, FaGoogle, FaJenkins, FaReact } from 'react-icons/fa';
import { TbBrandGolang, TbBrandTypescript } from 'react-icons/tb';

import {
  SiExpo,
  SiExpress,
  SiJira,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostman,
  SiRedis,
  SiRedux,
  SiVite,
  SiVuedotjs,
} from 'react-icons/si';

function SkillCard({ icon, name }: { icon: JSX.Element; name: string }) {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <p className="text-xs my-1">{name}</p>
    </div>
  );
}

function Skills() {
  return (
    <div className="w-3/4">
      <h2 className="font-mono text-lg sm:text-xl text-center text-alternative-text-color">
        Skills & Tools
      </h2>
      <div className="my-2 grid grid-cols-4 gap-2 md:grid-cols-7 md:gap-6 text-alternative-text-color">
        <SkillCard icon={<SiNextdotjs />} name="NextJS" />
        <SkillCard icon={<SiNestjs />} name="NestJs" />
        <SkillCard icon={<TbBrandTypescript />} name="Typescript" />
        <SkillCard icon={<DiNodejs />} name="Node" />
        <SkillCard icon={<SiExpress />} name="Express" />
        <SkillCard icon={<TbBrandGolang />} name="Golang" />
        <SkillCard icon={<FaReact />} name="React/Native" />
        <SkillCard icon={<SiRedux />} name="Redux" />
        <SkillCard icon={<SiVuedotjs />} name="VueJS" />
        <SkillCard icon={<SiVite />} name="Vite" />
        <SkillCard icon={<SiExpo />} name="Expo" />
        <SkillCard icon={<AiOutlineConsoleSql />} name="SQL" />
        <SkillCard icon={<SiMongodb />} name="MongoDb" />
        <SkillCard icon={<FaAws />} name="AWS" />
        <SkillCard icon={<FaGoogle />} name="GCP" />
        <SkillCard icon={<FaDocker />} name="Docker" />
        <SkillCard icon={<FaJenkins />} name="Jenkins" />
        <SkillCard icon={<SiRedis />} name="Redis" />
        <SkillCard icon={<SiPostman />} name="Postman" />
        <SkillCard icon={<SiJira />} name="Jira" />
      </div>
    </div>
  );
}

export default Skills;
