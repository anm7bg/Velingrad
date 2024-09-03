export interface blogCard {
    // post: any;
    id: number;
    title: any;
    rendered: string;
    excerpt: any;
    content: any;
    slug: string;
    featuredImage: any
    // rendered: any;
}

export interface blogCard2 {
    // post: any;
    // id: number;
    title: any;
    // rendered: string;
    excerpt: any;
    // content: any;
    slug: string;
    featuredImage: any
    // rendered: any;
}

export type SideNavItem = {
    title: string;
    path: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
  };