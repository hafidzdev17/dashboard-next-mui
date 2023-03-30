import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import CogIcon from "@heroicons/react/24/solid/CogIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import ProductsIcon from "@heroicons/react/24/solid/ShoppingBagIcon";
import { SvgIcon } from "@mui/material";
import { PATH_DASHBOARD as dashboard } from "../../routes";

export const items = [
  {
    title: "Overview",
    path: dashboard.root,
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Products",
    path: dashboard.products.root,
    icon: (
      <SvgIcon fontSize="small">
        <ProductsIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Customers",
    path: dashboard.customers,
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Account",
    path: dashboard.account,
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Settings",
    path: dashboard.settings,
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    ),
  },
];
