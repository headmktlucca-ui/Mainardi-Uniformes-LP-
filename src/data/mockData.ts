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

import kitModel0407Img from '../assets/images/kit_model_0407_1785980348635.jpg';
import kitModel0408Img from '../assets/images/kit_model_0408_1785980360478.jpg';
import kitModel0409Img from '../assets/images/kit_model_0409_1785980369245.jpg';
import kitModel0411Img from '../assets/images/kit_model_0411_1785980378127.jpg';
import kitModel0412Img from '../assets/images/kit_model_0412_1785980386602.jpg';
import kitModel0413Img from '../assets/images/kit_model_0413_1785980397299.jpg';
import kitModel0404Img from '../assets/images/kit_model_0404_1785980405458.jpg';
import kitModel0405Img from '../assets/images/kit_model_0405_1785980413164.jpg';

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
  },
  {
    id: 'mod-5',
    name: 'Modelo 0407 - Impressão Total do Tecido',
    category: 'futebol',
    image: kitModel0407Img,
    description: 'Camiseta de futebol modelo 0407 com estampa geométrica moderna e sublimação digital de alta definição.',
    colors: ['#22C55E', '#0F172A', '#16A34A'],
    features: ['Tecido Dry UV 50+', 'Sublimação Total HD', 'Escudo & Numeração Personalizada', 'Modelagem Anatômica'],
    badge: 'Modelo 0407'
  },
  {
    id: 'mod-6',
    name: 'Modelo 0408 - Impressão Total do Tecido',
    category: 'futebol',
    image: kitModel0408Img,
    description: 'Camiseta de futebol modelo 0408 com grafismo dinâmico de alta velocidade e detalhes esportivos.',
    colors: ['#334155', '#D4AF37', '#0F172A'],
    features: ['Tecido Dry Comfort', 'Sublimação Total sem Toque', 'Costuras Reforçadas Anti-Atrito', 'Gola V Esportiva'],
    badge: 'Modelo 0408'
  },
  {
    id: 'mod-7',
    name: 'Modelo 0409 - Impressão Total do Tecido',
    category: 'futebol',
    image: kitModel0409Img,
    description: 'Camiseta de futebol modelo 0409 com padronagem camuflada tecnológica em degradê vibrante.',
    colors: ['#F97316', '#DC2626', '#FACC15'],
    features: ['Absorção Rápida de Suor', 'Impressão Total no Tecido', 'Modelagem Raglan', 'Resistente a Lavagens'],
    badge: 'Modelo 0409'
  },
  {
    id: 'mod-8',
    name: 'Modelo 0411 - Impressão Total do Tecido',
    category: 'futebol',
    image: kitModel0411Img,
    description: 'Camiseta de futebol modelo 0411 com faixas e gradientes ópticos marcantes para times imponentes.',
    colors: ['#000000', '#FFFFFF', '#EF4444'],
    features: ['Sublimação Digital 1440 DPI', 'Tecido Leve & Respirável', 'Acabamento de Alta Qualidade', 'Ajuste Perfeito'],
    badge: 'Modelo 0411'
  },
  {
    id: 'mod-9',
    name: 'Modelo 0412 - Impressão Total do Tecido',
    category: 'futebol',
    image: kitModel0412Img,
    description: 'Camiseta de futebol modelo 0412 com textura tecnológica Dry e arte exclusiva em alta resolução.',
    colors: ['#18181B', '#EAB308', '#27272A'],
    features: ['Malha Microperfurada', 'Proteção UV 50+', 'Garantia de Durabilidade', 'Visual Profissional'],
    badge: 'Modelo 0412'
  },
  {
    id: 'mod-10',
    name: 'Modelo 0413 - Impressão Total do Tecido',
    category: 'futebol',
    image: kitModel0413Img,
    description: 'Camiseta de futebol modelo 0413 com corte tricolor elegante, faixas contrastantes e gola estruturada.',
    colors: ['#7C3AED', '#E11D48', '#2E1065'],
    features: ['Modelagem Esportiva Moderna', 'Tecido Tecnológico Jim Dry', 'Acabamento Premium', 'Totalmente Personalizável'],
    badge: 'Modelo 0413'
  },
  {
    id: 'mod-11',
    name: 'Modelo 0404 - Impressão Total do Tecido',
    category: 'futebol',
    image: kitModel0404Img,
    description: 'Camiseta de futebol modelo 0404 com textura favo de mel honeycomb e detalhes em alto contraste.',
    colors: ['#F8FAFC', '#CA8A04', '#334155'],
    features: ['Padrão Favo de Mel', 'Tecido Respirável Smart', 'Costuras Anti-Atrito', 'Conforto Térmico'],
    badge: 'Modelo 0404'
  },
  {
    id: 'mod-12',
    name: 'Modelo 0405 - Impressão Total do Tecido',
    category: 'futebol',
    image: kitModel0405Img,
    description: 'Camiseta de futebol modelo 0405 com estampa em chevron e efeito 3D reluzente para destaque em campo.',
    colors: ['#0284C7', '#0C4A6E', '#38BDF8'],
    features: ['Efeito Gráfico 3D', 'Alta Elasticidade e Conforto', 'Gerenciamento Térmico', 'Personalização Completa'],
    badge: 'Modelo 0405'
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
