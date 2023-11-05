export interface Route {
  path: string;
  component: React.LazyExoticComponent<React.FC>;
  noAuth?: boolean;
}
