interface MenuDropDownProps {
    showMenu: boolean;
    links: LinkInterface[];
  }
  
  interface LinkInterface {
    text: string;
    href: string;
    // current: boolean;
    subLinks?: LinkInterface[]; 
  }
  
  export type { MenuDropDownProps, LinkInterface };