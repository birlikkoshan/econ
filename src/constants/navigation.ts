export type NavItem = {
  id: string;
  labelKey: string;
  path: string;
};

export const NAV_ITEMS: NavItem[] = [
  { id: "home", labelKey: "nav.home", path: "/" },
  { id: "about", labelKey: "nav.about", path: "/about" },
  { id: "services", labelKey: "nav.services", path: "/services" },
  { id: "legislation", labelKey: "nav.legislation", path: "/legislation" },
  { id: "partners", labelKey: "nav.partners", path: "/partners" },
  { id: "contact", labelKey: "nav.contact", path: "/contacts" },
];
