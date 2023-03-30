function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = "/dashboard";

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  products: {
    root: path(ROOTS_DASHBOARD, "/products"),
    detail: path(ROOTS_DASHBOARD, "/detail"),
    add: path(ROOTS_DASHBOARD, "/add"),
    edit: (name) => path(ROOTS_DASHBOARD, `/user/${name}/edit`),
  },
  customers: path(ROOTS_DASHBOARD, "/customers"),
  account: path(ROOTS_DASHBOARD, "/account"),
  settings: path(ROOTS_DASHBOARD, "/settings"),
};
