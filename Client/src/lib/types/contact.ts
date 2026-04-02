export interface ContactInterface {
  id?: string;
  heading: string;
  description: string;
  socialLinks: { name: string; url: string; icon: string }[];
}