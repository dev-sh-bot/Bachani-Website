export interface NewsBlock {
  type: 'paragraph' | 'heading' | 'quote' | 'image';
  text?: string;
  caption?: string;
  imageKey?: string;
  author?: string;
}

export interface NewsArticle {
  slug: string;
  category: string;
  date: string;
  dateISO: string;
  author: string;
  readingTime: string;
  imageKey: string;
  title: string;
  excerpt: string;
  body: NewsBlock[];
}

export const news: NewsArticle[] = [
  {
    slug: 'mango-harvest-begins',
    category: 'Harvest Update',
    date: '15 June 2026',
    dateISO: '2026-06-15',
    author: '[Name], Orchard Manager',
    readingTime: '3 min read',
    imageKey: 'newsMango',
    title: 'Mango harvest begins for the 2026 season',
    excerpt: 'The first mangoes of the season have been picked. Here is how this year\'s harvest is shaping up across the orchard.',
    body: [
      { type: 'paragraph', text: 'The first mangoes of the 2026 season were picked this week at Bachani Farms, marking the start of our busiest time of the year.' },
      { type: 'heading', text: 'A good start to the season' },
      { type: 'paragraph', text: 'The trees flowered well in spring, and the fruit has grown steadily through the warm months. Our team picks each morning, while the fruit is still cool.' },
      { type: 'quote', text: 'Every season is different, but the care we give each tree stays the same.', author: '[Name], Orchard Manager' },
      { type: 'heading', text: 'From the orchard to our buyers' },
      { type: 'paragraph', text: 'Once picked, the fruit is sorted and packed before it goes to our contract buyers, who take it on to markets at home and abroad.' },
      { type: 'image', imageKey: 'mangoHarvest', caption: 'Harvested mangoes being sorted at the farm.' },
      { type: 'paragraph', text: 'Follow our news for more updates through the season.' },
    ],
  },
  {
    slug: 'new-tunnels-cucumbers',
    category: 'Farm News',
    date: '10 November 2025',
    dateISO: '2025-11-10',
    author: '[Name], Farm Manager',
    readingTime: '2 min read',
    imageKey: 'newsTunnel',
    title: 'New tunnels added for winter cucumbers',
    excerpt: 'We have added [00] new tunnels to grow more cucumbers through the cooler months.',
    body: [
      { type: 'paragraph', text: 'This season we added [00] new tunnels so we can grow more cucumbers through the cooler months. The new tunnels are built to the same design as our existing ones, with trellises inside and room for good airflow.' },
      { type: 'paragraph', text: 'More tunnels mean a steadier supply for our buyers between December and April, and more work for our team through the winter.' },
    ],
  },
  {
    slug: 'wheat-sowing-preparation',
    category: 'Seasonal Update',
    date: '5 October 2025',
    dateISO: '2025-10-05',
    author: '[Name], Farm Manager',
    readingTime: '2 min read',
    imageKey: 'newsWheat',
    title: 'Preparing the fields for wheat sowing',
    excerpt: 'After the summer crops, the fields are being prepared for this year\'s wheat.',
    body: [
      { type: 'paragraph', text: 'With the summer crops cleared, our team is preparing the fields for this year\'s wheat. The soil is levelled, fed and watered so the seed goes into a good bed.' },
      { type: 'paragraph', text: 'Sowing in winter lets the crop grow through the cool months and fill its ears in spring, ready for harvest in March and April.' },
    ],
  },
  {
    slug: 'sugarcane-crushing-season',
    category: 'Harvest Update',
    date: '20 November 2025',
    dateISO: '2025-11-20',
    author: '[Name], Field Manager',
    readingTime: '2 min read',
    imageKey: 'newsSugarcane',
    title: 'Sugarcane crushing season underway',
    excerpt: 'Harvesting has started in our sugarcane fields as the crushing season begins.',
    body: [
      { type: 'paragraph', text: 'Harvesting has started in our sugarcane fields as the crushing season begins. Each field is cut when the cane is mature, and loaded quickly for the mill.' },
      { type: 'paragraph', text: 'We plan the cutting field by field so the mill receives a steady supply through the season.' },
    ],
  },
  {
    slug: 'better-water-use',
    category: 'Farm News',
    date: '1 September 2025',
    dateISO: '2025-09-01',
    author: '[Name], Farm Manager',
    readingTime: '2 min read',
    imageKey: 'newsWater',
    title: 'Better water use across the farm',
    excerpt: 'New irrigation work is helping us water each field more efficiently.',
    body: [
      { type: 'paragraph', text: 'New irrigation work is helping us water each field more efficiently. Better channels and planning mean less water is lost on the way to the crop.' },
      { type: 'paragraph', text: 'Careful water use protects the land and keeps every crop, from mango to wheat, growing well through the year.' },
    ],
  },
  {
    slug: 'day-in-the-life-farm-team',
    category: 'Our Team',
    date: '12 August 2025',
    dateISO: '2025-08-12',
    author: '[Name]',
    readingTime: '3 min read',
    imageKey: 'newsTeam',
    title: 'A day in the life of our farm team',
    excerpt: 'Meet the people who care for the orchards, tunnels and fields every day.',
    body: [
      { type: 'paragraph', text: 'Every morning our farm team starts early, in the orchard, in the tunnels or in the fields. Each person knows their crop well, and that knowledge is what keeps quality steady.' },
      { type: 'paragraph', text: 'A farm is only as strong as its people. This is a short look at a day in their work.' },
    ],
  },
];
