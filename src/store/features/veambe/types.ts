export interface VeambeStructure {
  _id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
}

export interface VeambeStateStructure {
  artworks: VeambeStructure[];
}
