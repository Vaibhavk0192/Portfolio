export interface HomeInterface {
  id?: string;
  name: string;
  description: string;
  location: string;
  socialLinks: { platform: string; url: string }[];
}