export interface FolderComponentProps {
  id: string;
  title: string;
  icon?: string;
  children?: FolderComponentProps[];
  link?: string;
  color: string;
}