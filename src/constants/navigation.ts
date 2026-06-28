export type NavItem = {
  id: string;
  labelKey: string;
};

export const NAV_ITEMS: NavItem[] = [
  { id: "home", labelKey: "nav.home" },
  { id: "about", labelKey: "nav.about" },
  { id: "services", labelKey: "nav.services" },
  { id: "legislation", labelKey: "nav.legislation" },
  { id: "partners", labelKey: "nav.partners" },
  { id: "contact", labelKey: "nav.contact" },
];
