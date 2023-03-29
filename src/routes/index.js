function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = "/dashboard";

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  products: path(ROOTS_DASHBOARD, "/products"),
  customers: path(ROOTS_DASHBOARD, "/customers"),
  account: path(ROOTS_DASHBOARD, "/account"),
  settings: path(ROOTS_DASHBOARD, "/settings"),
};
