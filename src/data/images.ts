export interface ImageData {
  key: string;
  url: string;
  alt: string;
  aspectRatio?: string;
  focalPoint?: string;
}

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
    url: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=900&h=700&fit=crop&auto=format',
    alt: 'Rows of mango trees stretching across the Bachani Farms orchard',
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
    alt: 'A full bunch of green bananas growing on the plantation',
    aspectRatio: '4/3',
  },
  papaya: {
    key: 'papaya',
    url: 'https://images.unsplash.com/photo-1569959808474-debc539b72aa?w=900&h=700&fit=crop&auto=format',
    alt: 'Papaya trees in rows with fruit clusters growing at Bachani Farms',
    aspectRatio: '4/3',
  },
  papayaTrees: {
    key: 'papayaTrees',
    url: 'https://images.unsplash.com/photo-1625007507813-28644d7d8b03?w=600&h=800&fit=crop&auto=format',
    alt: 'A papaya tree with clusters of ripening fruit on the trunk',
    aspectRatio: '3/4',
  },
  cucumber: {
    key: 'cucumber',
    url: 'https://images.unsplash.com/photo-1776285759652-8f0ebbad1619?w=900&h=700&fit=crop&auto=format',
    alt: 'Rows of plants growing inside a tunnel greenhouse at Bachani Farms',
    aspectRatio: '4/3',
  },
  cucumberTunnel: {
    key: 'cucumberTunnel',
    url: 'https://images.unsplash.com/photo-1523284998774-f6d3960be911?w=900&h=700&fit=crop&auto=format',
    alt: 'Inside a farm greenhouse tunnel with crop rows stretching to the end',
    aspectRatio: '4/3',
  },
  cucumberFresh: {
    key: 'cucumberFresh',
    url: 'https://images.unsplash.com/photo-1568584711271-6c929fb49b60?w=900&h=600&fit=crop&auto=format',
    alt: 'Cucumber vines heavy with fruit growing on trellises in the tunnel',
    aspectRatio: '3/2',
  },
  sugarcane: {
    key: 'sugarcane',
    url: 'https://images.unsplash.com/photo-1775619427924-16ff07cf2f2e?w=900&h=700&fit=crop&auto=format',
    alt: 'Tall green sugarcane stalks growing in an open field under blue sky',
    aspectRatio: '4/3',
  },
  sugarcaneHarvest: {
    key: 'sugarcaneHarvest',
    url: 'https://images.unsplash.com/photo-1606707761700-86b58f251a01?w=900&h=600&fit=crop&auto=format',
    alt: 'Sugarcane growing in a wide open field at Bachani Farms',
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
    url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&h=700&fit=crop&auto=format',
    alt: 'The Bachani Farms team working together in the fields',
    aspectRatio: '4/3',
  },
  farmTeamWork: {
    key: 'farmTeamWork',
    url: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&h=600&fit=crop&auto=format',
    alt: 'Farm workers tending to crops across the fields at Bachani Farms',
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
    url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900&h=600&fit=crop&auto=format',
    alt: 'Irrigation channels running between farm fields at Bachani Farms',
    aspectRatio: '3/2',
  },
  harvest: {
    key: 'harvest',
    url: 'https://images.unsplash.com/photo-1680791335171-4f169206b066?w=1200&h=700&fit=crop&auto=format',
    alt: 'Freshly harvested mango bunches ready for sorting at Bachani Farms',
    aspectRatio: '16/9',
  },
  orchard: {
    key: 'orchard',
    url: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1200&h=700&fit=crop&auto=format',
    alt: 'Mango orchard rows at sunrise at Bachani Farms',
    aspectRatio: '16/9',
  },
  tunnelInside: {
    key: 'tunnelInside',
    url: 'https://images.unsplash.com/photo-1523284998774-f6d3960be911?w=900&h=700&fit=crop&auto=format',
    alt: 'Inside view of a farm tunnel greenhouse with long crop rows',
    aspectRatio: '4/3',
  },
  openField: {
    key: 'openField',
    url: 'https://images.unsplash.com/photo-1595024600400-2a49b9fce270?w=900&h=700&fit=crop&auto=format',
    alt: 'Open wheat field stretching to the horizon at Bachani Farms',
    aspectRatio: '4/3',
  },
  farmOwner: {
    key: 'farmOwner',
    url: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&h=800&fit=crop&auto=format',
    alt: 'Owner of Bachani Farms in the orchard',
    aspectRatio: '3/4',
  },
  packing: {
    key: 'packing',
    url: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=900&h=600&fit=crop&auto=format',
    alt: 'Produce being sorted and packed at Bachani Farms',
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
    url: 'https://images.unsplash.com/photo-1776285759652-8f0ebbad1619?w=800&h=500&fit=crop&auto=format',
    alt: 'New growing tunnels at Bachani Farms',
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
    url: 'https://images.unsplash.com/photo-1775619427924-16ff07cf2f2e?w=800&h=500&fit=crop&auto=format',
    alt: 'Sugarcane harvest underway at Bachani Farms',
    aspectRatio: '16/10',
  },
  newsWater: {
    key: 'newsWater',
    url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=500&fit=crop&auto=format',
    alt: 'Irrigation improvements at Bachani Farms',
    aspectRatio: '16/10',
  },
  newsTeam: {
    key: 'newsTeam',
    url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=500&fit=crop&auto=format',
    alt: 'The Bachani Farms team at work in the fields',
    aspectRatio: '16/10',
  },
  growOrchard: {
    key: 'growOrchard',
    url: 'https://images.unsplash.com/photo-1781673232370-ece15536d3d3?w=800&h=1000&fit=crop&auto=format',
    alt: 'Rows of fruit trees in a well-tended orchard',
    aspectRatio: '4/5',
  },
  growTunnel: {
    key: 'growTunnel',
    url: 'https://images.unsplash.com/photo-1568584711271-6c929fb49b60?w=800&h=1000&fit=crop&auto=format',
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
