export interface ImageData {
  key: string;
  url: string;
  alt: string;
  aspectRatio?: string;
  focalPoint?: string;
}

const cropPhotoUrls = {
  mangoOrchard: 'https://images.unsplash.com/photo-1781673232370-ece15536d3d3?w=1200&h=900&fit=crop&auto=format',
  mangoHarvest: 'https://images.unsplash.com/photo-1605027990121-cbae9e0642df?w=1200&h=900&fit=crop&auto=format',
  cucumberTunnel: '/images/gallery/cucumber-tunnel.webp',
  sugarcaneField: 'https://images.unsplash.com/photo-1606707761700-86b58f251a01?w=1200&h=900&fit=crop&auto=format',
  sugarcaneHarvest: '/images/gallery/sugarcane-harvest.webp',
} as const;

export const images: Record<string, ImageData> = {
  hero: {
    key: 'hero',
    url: 'https://images.unsplash.com/photo-1644731939969-324d4f0d082d?w=1920&h=1080&fit=crop&auto=format',
    alt: 'Aerial view of green farmland with mountains in the distance',
    aspectRatio: '16/9',
    focalPoint: 'center',
  },
  mango: {
    key: 'mango',
    url: 'https://images.unsplash.com/photo-1753055951929-8d7752f28e14?w=900&h=700&fit=crop&auto=format',
    alt: 'Ripe mangoes hanging in clusters from orchard tree branches',
    aspectRatio: '4/3',
  },
  mangoOrchard: {
    key: 'mangoOrchard',
    url: cropPhotoUrls.mangoOrchard,
    alt: 'Green mangoes growing among the leaves of an orchard tree',
    aspectRatio: '4/3',
  },
  mangoHarvest: {
    key: 'mangoHarvest',
    url: 'https://images.unsplash.com/photo-1680791335171-4f169206b066?w=900&h=600&fit=crop&auto=format',
    alt: 'A heavy bunch of mangoes ready for harvest on the tree',
    aspectRatio: '3/2',
  },
  mangoTree: {
    key: 'mangoTree',
    url: 'https://images.unsplash.com/photo-1651729103198-87e2243c5fe3?w=600&h=800&fit=crop&auto=format',
    alt: 'Mango fruit developing on the branch before harvest',
    aspectRatio: '3/4',
  },
  banana: {
    key: 'banana',
    url: 'https://images.unsplash.com/photo-1620036924477-c3d6e9ce36fc?w=900&h=700&fit=crop&auto=format',
    alt: 'Green banana bunches hanging on the plant at Bachani Farms',
    aspectRatio: '4/3',
  },
  bananaBunch: {
    key: 'bananaBunch',
    url: 'https://images.unsplash.com/photo-1539808505172-71ad23d99b4a?w=900&h=700&fit=crop&auto=format',
    alt: 'A full bunch of green bananas growing outdoors in an open field',
    aspectRatio: '4/3',
  },
  tomatoes: {
    key: 'tomatoes',
    url: '/images/crops/tomatoes-vine.jpg',
    alt: 'Red and green tomatoes ripening on leafy vines outdoors',
    aspectRatio: '3/2',
  },
  tomatoHarvest: {
    key: 'tomatoHarvest',
    url: '/images/crops/tomatoes-harvest.jpg',
    alt: 'Ripe red tomatoes gathered in a wicker basket',
    aspectRatio: '3/2',
  },
  cucumber: {
    key: 'cucumber',
    url: cropPhotoUrls.cucumberTunnel,
    alt: 'Cucumbers growing on trellised vines inside a farm tunnel',
    aspectRatio: '4/3',
  },
  cucumberTunnel: {
    key: 'cucumberTunnel',
    url: cropPhotoUrls.cucumberTunnel,
    alt: 'Rows of cucumber vines bearing fruit inside a farm tunnel',
    aspectRatio: '4/3',
  },
  cucumberFresh: {
    key: 'cucumberFresh',
    url: 'https://images.unsplash.com/photo-1568584711271-6c929fb49b60?w=900&h=600&fit=crop&auto=format',
    alt: 'Freshly picked green cucumbers ready for sorting',
    aspectRatio: '3/2',
  },
  sugarcane: {
    key: 'sugarcane',
    url: cropPhotoUrls.sugarcaneField,
    alt: 'Tall sugarcane stalks growing in rows beside an open field',
    aspectRatio: '4/3',
  },
  sugarcaneHarvest: {
    key: 'sugarcaneHarvest',
    url: cropPhotoUrls.sugarcaneHarvest,
    alt: 'Harvested sugarcane loaded on a trailer ready for the mill',
    aspectRatio: '3/2',
  },
  wheat: {
    key: 'wheat',
    url: 'https://images.unsplash.com/photo-1595024600400-2a49b9fce270?w=900&h=700&fit=crop&auto=format',
    alt: 'Golden wheat field under a wide blue sky at Bachani Farms',
    aspectRatio: '4/3',
  },
  wheatHarvest: {
    key: 'wheatHarvest',
    url: 'https://images.unsplash.com/photo-1600721860729-d90ff446f6fa?w=900&h=700&fit=crop&auto=format',
    alt: 'Wheat field at harvest time with full golden heads',
    aspectRatio: '4/3',
  },
  farmTeam: {
    key: 'farmTeam',
    url: cropPhotoUrls.mangoOrchard,
    alt: 'Mango fruit growing on the orchard trees cared for by the farm team',
    aspectRatio: '4/3',
  },
  farmTeamWork: {
    key: 'farmTeamWork',
    url: cropPhotoUrls.sugarcaneHarvest,
    alt: 'Cut sugarcane loaded on a trailer beside the crop fields',
    aspectRatio: '2/1',
  },
  farmOverview: {
    key: 'farmOverview',
    url: 'https://images.unsplash.com/photo-1644731939969-324d4f0d082d?w=1200&h=700&fit=crop&auto=format',
    alt: 'Aerial view of Bachani Farms showing orchards and open fields',
    aspectRatio: '16/9',
  },
  irrigation: {
    key: 'irrigation',
    url: cropPhotoUrls.cucumberTunnel,
    alt: 'Drip irrigation lines along rows of fruiting cucumber vines',
    aspectRatio: '3/2',
  },
  harvest: {
    key: 'harvest',
    url: cropPhotoUrls.mangoHarvest,
    alt: 'Freshly harvested ripe mangoes ready for sorting',
    aspectRatio: '16/9',
  },
  orchard: {
    key: 'orchard',
    url: cropPhotoUrls.mangoOrchard,
    alt: 'Mangoes growing on a tree in the orchard',
    aspectRatio: '16/9',
  },
  tunnelInside: {
    key: 'tunnelInside',
    url: cropPhotoUrls.cucumberTunnel,
    alt: 'Inside a farm tunnel with long rows of cucumber vines',
    aspectRatio: '4/3',
  },
  openField: {
    key: 'openField',
    url: 'https://images.unsplash.com/photo-1595024600400-2a49b9fce270?w=900&h=700&fit=crop&auto=format',
    alt: 'Open wheat field stretching to the horizon at Bachani Farms',
    aspectRatio: '4/3',
  },
  packing: {
    key: 'packing',
    url: cropPhotoUrls.mangoHarvest,
    alt: 'Harvested mangoes gathered for sorting and packing',
    aspectRatio: '3/2',
  },
  newsDefault: {
    key: 'newsDefault',
    url: 'https://images.unsplash.com/photo-1644731939969-324d4f0d082d?w=800&h=500&fit=crop&auto=format',
    alt: 'Bachani Farms fields seen from above',
    aspectRatio: '16/10',
  },
  newsMango: {
    key: 'newsMango',
    url: 'https://images.unsplash.com/photo-1753055951929-8d7752f28e14?w=800&h=500&fit=crop&auto=format',
    alt: 'Mango harvest season — fruit hanging on trees at Bachani Farms',
    aspectRatio: '16/10',
  },
  newsTunnel: {
    key: 'newsTunnel',
    url: cropPhotoUrls.cucumberTunnel,
    alt: 'Cucumber plants growing inside a farm tunnel',
    aspectRatio: '16/10',
  },
  newsWheat: {
    key: 'newsWheat',
    url: 'https://images.unsplash.com/photo-1595024600400-2a49b9fce270?w=800&h=500&fit=crop&auto=format',
    alt: 'Wheat field being prepared for sowing at Bachani Farms',
    aspectRatio: '16/10',
  },
  newsSugarcane: {
    key: 'newsSugarcane',
    url: cropPhotoUrls.sugarcaneHarvest,
    alt: 'Cut sugarcane loaded for transport during the harvest',
    aspectRatio: '16/10',
  },
  newsWater: {
    key: 'newsWater',
    url: cropPhotoUrls.cucumberTunnel,
    alt: 'Irrigation lines watering cucumber plants inside a tunnel',
    aspectRatio: '16/10',
  },
  newsTeam: {
    key: 'newsTeam',
    url: cropPhotoUrls.mangoOrchard,
    alt: 'Fruit growing in the mango orchard tended by the farm team',
    aspectRatio: '16/10',
  },
  growOrchard: {
    key: 'growOrchard',
    url: cropPhotoUrls.mangoOrchard,
    alt: 'Mango tree branches bearing green fruit in the orchard',
    aspectRatio: '4/5',
  },
  growTunnel: {
    key: 'growTunnel',
    url: cropPhotoUrls.cucumberTunnel,
    alt: 'Cucumber plants growing on trellises inside a farm tunnel',
    aspectRatio: '4/5',
  },
  growField: {
    key: 'growField',
    url: 'https://images.unsplash.com/photo-1763257494793-b2bde45acd96?w=800&h=1000&fit=crop&auto=format',
    alt: 'Golden wheat field ready for harvest',
    aspectRatio: '4/5',
  },
};
