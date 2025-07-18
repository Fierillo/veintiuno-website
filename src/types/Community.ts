export interface Community {
  id: string;
  title: string;
  description: string;
  link: string;
  latitude: number;
  longitude: number;
  country: string;
  city?: string;
  tags?: string[];
  category?: string;
}