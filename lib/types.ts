export interface NavItem {
  label: string;
  href: string;
  children?: NavGroup[];
}

export interface NavGroup {
  title: string;
  href: string;
  items: NavLink[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Programme {
  title: string;
  slug: string;
  description: string;
  href: string;
  image: string;
}

export interface School {
  title: string;
  slug: string;
  href: string;
}

export interface ResearchDepartment {
  title: string;
  slug: string;
  description: string;
  href: string;
  image: string;
}

export interface MediaEvent {
  title: string;
  slug: string;
  category: string;
  department: string;
  date: string;
  href: string;
  image?: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
