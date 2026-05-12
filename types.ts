
export interface MarketingStrategy {
  title: string;
  description: string;
  channels: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export enum Niche {
  RETAIL = 'Varejo',
  TECH = 'Tecnologia',
  HEALTH = 'Saúde',
  EDUCATION = 'Educação',
  FOOD = 'Alimentos & Bebidas',
  REAL_ESTATE = 'Imobiliário'
}
