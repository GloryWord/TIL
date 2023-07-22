import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";
//
import Tablolist from "views/admin/tabloList";
import Tablo1 from "views/admin/tablo1";
import MCLS_06 from "views/admin/MCLS_06"
//

// Auth Imports
import SignInCentered from "views/auth/signIn";
import { NaverLogo } from "components/icons/Icons";
//path 브라우저 URL 입력에 표시
//component 지정된 경로에 표시하려는 보기 구성 요소
//name : 사이드바에 표시되는 이름
//layout

const routes = [
  {
    name: "한눈에 보기",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "카테고리",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "태블로 리스트",
    layout: "/tablolist",
    path: "/tablolist",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    component: Tablolist,
  },
  {
    name: [],
    layout: "/admin",
    path: "/tablo1",
    icon: [],
    component: Tablo1,
  },
  {
    name: "MCLS_06",
    layout: "/admin",
    path: "/MCLS_06",
    icon: [],
    component: MCLS_06,
  },
];
export default routes;
// additional part
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "/profile",
  //   icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
  //   component: Profile,
  // },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "/sign-in",
  //   icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
  //   component: SignInCentered,
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "/rtl-default",
  //   icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  //   component: RTL,
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "/rtl-default",
  //   icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  //   component: RTL,
  // }