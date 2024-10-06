import { CiChat1 } from "react-icons/ci";
import { FaTachometerAlt, FaChartLine} from "react-icons/fa"; 
import { FcStatistics } from "react-icons/fc";
import { FiSettings } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import { PiBankBold, PiBoundingBoxBold } from "react-icons/pi";
import { TbBrandCodesandbox, TbLogout2 } from "react-icons/tb";

interface NavLink {
  id: number; 
  label: string;
  path: string;
  icon: any; 
}

const navlinks: NavLink[] = [
  {
    id: 1,
    label: "Dashboard",
    path: "/",
    icon: PiBoundingBoxBold
  },
  {
    id: 2,
    label: "Product",
    path: "/product",
    icon: TbBrandCodesandbox
  },
  {
    id: 3,
    label: "Sales",
    path: "/sale",
    icon: FaChartLine
  },
  {
    id: 4,
    label: "Banking",
    path: "/banking",
    icon: PiBankBold
  },
  {
    id: 5,
    label: "Calendar",
    path: "/calendar",
    icon: IoCalendarOutline
  },
  {
    id: 6,
    label: "Statistics",
    path: "/statistics",
    icon: FcStatistics 
  },
  {
    id: 7,
    label: "Chat",
    path: "/chat",
    icon: CiChat1
  },
  {
    id: 8,
    label: "Customers",
    path: "/customers",
    icon: HiOutlineUserGroup
  }
];

export const navs : NavLink[] = [
  {
    id: 1,
    label: "Settings",
    path: "/settings",
    icon: FiSettings 
  },
  {
    id: 2,
    label: "Log Out",
    path: "/logout",
    icon: TbLogout2
  }
];

export default navlinks;
