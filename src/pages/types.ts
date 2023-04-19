export type PageType = {
  comp?: React.FunctionComponent;
  title: string;
  route: string;
  subRoutes?: PageType[];
  img?: string;
};
