export interface VeambeStructure {
  _id: string;
  title: string;
  description: string;
  date: number;
  location: string;
  image: string;
}

export interface VeambeStateStructure {
  artwork: VeambeStructure[];
}
