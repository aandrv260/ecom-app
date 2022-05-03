export type MenuItem = {
  itemName: string;
  link: string;
};

export type NavMenu = MenuItem[];

export const headerNav = [
  {
    itemName: "Home",
    link: "/",
  },

  {
    itemName: "Categories",
    link: "/categories",
  },

  {
    itemName: "Contact us",
    link: "/contact-us",
  },
];
