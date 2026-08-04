import { UniformModel, InfluencerPhoto } from '../types';

import logoImg from '../assets/images/Logo_Graf.png';
import heroImg from '../assets/images/hero_influencer_1785868130535.jpg';
import influencerRedImg from '../assets/images/influencers_team_red_1785868140889.jpg';
import influencerMultiImg from '../assets/images/influencers_team_multi_1785868152058.jpg';
import kitRedImg from '../assets/images/kit_red_stripe_1785868167595.jpg';
import kitBlueYellowImg from '../assets/images/kit_blue_yellow_1785868177051.jpg';
import kitTealRippleImg from '../assets/images/kit_teal_ripple_1785868217058.jpg';
import kitMaroonGoldImg from '../assets/images/kit_maroon_gold_1785868227131.jpg';
import fabricUvImg from '../assets/images/fabric_uv_texture_1785868186164.jpg';
import stitchingImg from '../assets/images/reinforced_stitching_1785868195993.jpg';

export const ASSETS = {
  logo: logoImg,
  hero: heroImg,
  influencerRed: influencerRedImg,
  influencerMulti: influencerMultiImg,
  kitRed: kitRedImg,
  kitBlueYellow: kitBlueYellowImg,
  kitTealRipple: kitTealRippleImg,
  kitMaroonGold: kitMaroonGoldImg,
  fabricUv: fabricUvImg,
  stitching: stitchingImg,
};

export const INFLUENCER_PHOTOS: InfluencerPhoto[] = [
  {
    id: 'inf-1',
    teamName: 'Graça & Luta FC',
    image: influencerRedImg,
    caption: 'Influenciadores e atletas vestindo a coleção Graça & Luta com estampa em listras diagonais cinza e vermelho.',
    uniformStyle: 'Raglan Listras Diagonais - Tecido Jim Dry UV50+'
  },
  {
    id: 'inf-2',
    teamName: 'Graça Fut - Coleção Premium',
    image: influencerMultiImg,
    caption: 'Time de influenciadores exibindo os modelos Chevron Azul/Amarelo, Teal Wave Ripple, Maroon Geometric e Green Matrix.',
    uniformStyle: 'Kit Sublimação Total - Modelagem Anatômica'
  }
];

export const UNIFORM_MODELS: UniformModel[] = [
  {
    id: 'mod-1',
    name: 'Camiseta Futebol Raglan - Listras Diagonais',
    category: 'futebol',
    image: kitRedImg,
    description: 'Design exclusivo com listras diagonais cinza e detalhes em vermelho e cinza escuro. Ideal para times que buscam identidade marcante e modernidade.',
    colors: ['#E5E7EB', '#DC2626', '#1F2937'],
    features: ['Tecido Jim Dry UV 50+', 'Escudo Sublimado', 'Patrocinadores Ilimitados', 'Gola Careca ou V'],
    badge: 'Mais Vendido'
  },
  {
    id: 'mod-2',
    name: 'Kit Chevron Azul & Amarelo Ouro',
    category: 'futebol',
    image: kitBlueYellowImg,
    description: 'Estampa em V (Chevron) em tons vibrantes de azul royal e amarelo ouro com detalhes geométricos de alta definição.',
    colors: ['#1D4ED8', '#FACC15', '#1E3A8A'],
    features: ['Tecido Dry Ultra', 'Alta Respirabilidade', 'Costura Dupla Reforçada', 'Escudo em Definição HD'],
    badge: 'Novo'
  },
  {
    id: 'mod-3',
    name: 'Kit Teal Wave Ripple - Onda Turquesa',
    category: 'futebol',
    image: kitTealRippleImg,
    description: 'Padrão gráfico abstrato estilo ondulação marinha em tons turquesa e azul marinho, perfeito para futsal e campo.',
    colors: ['#0D9488', '#1E293B', '#38BDF8'],
    features: ['Proteção Solar UV 50+', 'Absorção Rápida do Suor', 'Sem Emenda Lateral no Calção', 'Numeração Personalizada'],
    badge: 'Destaque'
  },
  {
    id: 'mod-4',
    name: 'Kit Maroon Gold Geometric - Vinho & Ouro',
    category: 'futebol',
    image: kitMaroonGoldImg,
    description: 'Sofisticação e tradição em tons vinho bordo com detalhes em ouro velado e gola estilizada.',
    colors: ['#800020', '#D4AF37', '#2D0A14'],
    features: ['Tecido Jim Dry de Alta Gramatura', 'Modelagem Raglan Confortável', 'Sublimação Digital 1440 DPI', 'Durabilidade Extrema'],
    badge: 'Edição Especial'
  }
];

export const COMPANY_INFO = {
  name: 'Gráfica Mainardi',
  subtitle: 'Uniformes Esportivos Personalizados',
  phone: '51995227818',
  phoneFormatted: '(51) 99522-7818',
  email: 'atendimento@graficamainardi.com.br',
  address: 'Rua Herbert Wilke, 95 - Centro',
  city: 'Sobradinho - RS',
  zip: '96900-000',
  workingHours: 'Segunda a Sexta: 08:00 - 18:00',
  social: {
    facebook: 'https://facebook.com/graficamainardi',
    instagram: 'https://instagram.com/graficamainardi',
    twitter: 'https://twitter.com/graficamainardi',
    youtube: 'https://youtube.com/graficamainardi'
  }
};
