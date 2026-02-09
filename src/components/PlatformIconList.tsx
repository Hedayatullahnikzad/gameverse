import type { Platform } from "../hooks/usePlatforms";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <div>
      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400  my-1">
        {platforms.map((platform) => {
          const Icon = iconMap[platform.slug];

          return Icon ? (
            <Icon key={platform.id} className="text-lg" title={platform.name} />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default PlatformIconList;
