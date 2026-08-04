export interface UniformModel {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  colors: string[];
  features: string[];
  badge?: string;
}

export interface InfluencerPhoto {
  id: string;
  teamName: string;
  image: string;
  caption: string;
  uniformStyle: string;
}

export interface CustomKitConfig {
  shirtStyle: 'raglan' | 'tradicional';
  collarStyle: 'v' | 'careca';
  fabric: 'jim_dry' | 'dry_ultra' | 'poliester_premium';
  primaryColor: string;
  secondaryColor: string;
  shortsColor: string;
  teamName: string;
  playerNumber: string;
  playerName: string;
  quantity: number;
  includeShorts: boolean;
  includeSocks: boolean;
  notes: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  teamName: string;
  quantity: number;
  message: string;
}
