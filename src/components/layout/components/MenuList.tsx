import { BiSolidDashboard, BiSolidVideos } from "react-icons/bi";
import { FaClock, FaUser } from "react-icons/fa";
import { MdAudioFile, MdMenuBook } from "react-icons/md";
import { PiListStarBold } from "react-icons/pi";
export const MenuList = [
  {
    key: "/",
    icon: <BiSolidDashboard size={16} />,
    label: "Dashboard",
  },
  {
    key: "/user",
    icon: <FaUser size={16} />,
    label: "Users",
  },
  {
    key: "/visual-practice",
    icon: <BiSolidVideos size={16} />,
    label: "Visual Practice",
  },
  {
    key: "/audio-practice",
    icon: <MdAudioFile size={16} />,
    label: "Audio Practice",
  },
  {
    key: "/practices",
    icon: <PiListStarBold size={16} />,
    label: "Practices",
  },
  {
    key: "/resources",
    icon: <MdMenuBook size={16} />,
    label: "Resources",
  },
  {
    key: "/resources-articles",
    icon: <MdMenuBook size={16} />,
    label: "Resources Articles",
  },
  {
    key: "/moments",
    icon: <FaClock size={16} />,
    label: "Moments",
  },
];
