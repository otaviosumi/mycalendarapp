import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from "@material-ui/icons/Mail";
import AssessIcon from "@material-ui/icons/Assessment";
import DashboardIcon from "@material-ui/icons/CalendarToday";
import PeopleIcon from "@material-ui/icons/People";
import CategoryIcon from "@material-ui/icons/Category";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import StoreIcon from "@material-ui/icons/Store";

export const SidebarData = [
  {
    title: "Calendário",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "Clientes",
    icon: <AssessIcon />,
    link: "/clientes",
  },
  {
    title: "Prestadores",
    icon: <PeopleIcon />,
    link: "/prestadores",
  },
  {
    title: "Centros de Custo",
    icon: <StoreIcon />,
    link: "/centrosdecusto",
  },
  {
    title: "Contas contáveis",
    icon: <CategoryIcon />,
    link: "/contascontabeis",
  },
  {
    title: "Procedimentos",
    icon: <AccountTreeIcon />,
    link: "/procedimentos",
  },
  {
    title: "Cadernos",
    icon: <MenuBookIcon />,
    link: "/cadernos",
  },
];