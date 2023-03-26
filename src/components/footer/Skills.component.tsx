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
      <h2 className="text-xl" style={{ color: COLORS.alternativeTextColor }}>
        Skills & Tools
      </h2>
      <div
        className="flex flex-row justify-around  w-full text-3xl items-center m-3"
        style={{ color: COLORS.alternativeTextColor }}
      >
        <TbBrandTypescript />
        <DiNodejs />
        <FaReact />
        <SiNestjs />
        <AiOutlineConsoleSql />
        <SiMongodb />
        <TbBrandGolang />
      </div>
      <div
        style={{ color: COLORS.alternativeTextColor }}
        className="flex flex-row justify-around  w-full text-3xl items-center m-3"
      >
        <FaAws />
        <FaDocker />
        <FaJenkins />
        <FaGoogle />
        <SiRedis />
        <SiPostman />
        <SiJira />
      </div>
    </div>
  );
}

export default Skills;
