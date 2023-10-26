import COLORS from 'src/common/colors';
import { TbBrandTypescript, TbBrandGolang } from 'react-icons/tb';
import { FaGoogle, FaAws, FaReact, FaDocker, FaJenkins } from 'react-icons/fa';
import { DiNodejs } from 'react-icons/di';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import {
  SiMongodb,
  SiRedis,
  SiNestjs,
  SiPostman,
  SiJira,
} from 'react-icons/si';

function Skills() {
  return (
    <div className="flex flex-col justify-between items-center w-3/4">
      <h2
        className="font-mono text-lg sm:text-xl"
        style={{ color: COLORS.alternativeTextColor }}
      >
        Skills & Tools
      </h2>
      <div
        className="flex flex-row justify-around  w-full text-3xl items-center m-3"
        style={{ color: COLORS.alternativeTextColor }}
      >
        <div className="flex flex-col items-center">
          <TbBrandTypescript />
          <p className="text-xs my-1">Typescript</p>
        </div>
        <div className="flex flex-col items-center">
          <SiNestjs />
          <p className="text-xs my-1">NestJs</p>
        </div>

        <div className="flex flex-col items-center">
          <FaDocker />
          <p className="text-xs my-1">Docker</p>
        </div>

        <div className="flex flex-col items-center">
          <FaAws />
          <p className="text-xs my-1">AWS</p>
        </div>
        <div className="flex flex-col items-center">
          <AiOutlineConsoleSql />
          <p className="text-xs my-1">SQL</p>
        </div>
        <div className="flex flex-col items-center">
          <SiMongodb />
          <p className="text-xs my-1">MongoDb</p>
        </div>
        <div className="flex flex-col items-center">
          <TbBrandGolang />
          <p className="text-xs my-1">Golang</p>
        </div>
      </div>
      <div
        style={{ color: COLORS.alternativeTextColor }}
        className="flex flex-row justify-around  w-full text-3xl items-center m-3"
      >
        <div className="flex flex-col items-center">
          <FaReact />
          <p className="text-xs my-1">React/Native</p>
        </div>
        <div className="flex flex-col items-center">
          <DiNodejs />
          <p className="text-xs my-1">Node</p>
        </div>
        <div className="flex flex-col items-center">
          <FaJenkins />
          <p className="text-xs my-1">Jenkins</p>
        </div>
        <div className="flex flex-col items-center">
          <FaGoogle />
          <p className="text-xs my-1">GCP</p>
        </div>
        <div className="flex flex-col items-center">
          <SiRedis />
          <p className="text-xs my-1">Redis</p>
        </div>
        <div className="flex flex-col items-center">
          <SiPostman />
          <p className="text-xs my-1">Postman</p>
        </div>
        <div className="flex flex-col items-center">
          <SiJira />
          <p className="text-xs my-1">Jira</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
