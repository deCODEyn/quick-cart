export interface NavbarLinkInterface {
  onClick?: () => void;
  isMobile?: boolean;
}

export type PageLinksType = {
  href: string;
  label: string;
};
