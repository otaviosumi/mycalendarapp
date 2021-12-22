import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from "@mui/icons-material/Mail";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleIcon from "@mui/icons-material/People";
import CategoryIcon from "@mui/icons-material/Category";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import StoreIcon from "@mui/icons-material/Store";

export const SidebarData = [
  {
    title: "Calendário",
    icon: <CalendarTodayIcon />,
    link: "/CalendarBoard",
  },
  {
    title: "Clientes",
    icon: <AssessmentIcon />,
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