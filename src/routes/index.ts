import { ReactNode } from "react";
import { Blogs } from "../components/content/Blogs";
import { About } from "../components/content/About";

interface RouteInfo {
  path: string;
  desc: string;
  element: ReactNode
}

export const routesList:RouteInfo[] = [
  {
    path: '/blogs',
    desc: '个人博客',
    element: Blogs()
  },
  // {
  //   path: '/poetry',
  //   desc: '人生如歌',
  //   element: Poetry()
  // },
  {
    path: '/about',
    desc: '关于',
    element: About()
  },
]