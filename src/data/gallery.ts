export interface GalleryItem {
  key: string;
  url: string;
  caption: string;
  alt: string;
  category: 'Orchard' | 'Tunnels' | 'Fields' | 'Harvest' | 'People';
}

export const galleryItems: GalleryItem[] = [
  {
    key: 'g1',
    url: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&h=1000&fit=crop&auto=format',
    caption: 'Mango orchard rows at sunrise',
    alt: 'Rows of mango trees in the Bachani Farms orchard at sunrise',
    category: 'Orchard',
  },
  {
    key: 'g2',
    url: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&h=600&fit=crop&auto=format',
    caption: 'Banana plantation',
    alt: 'Long rows of banana plants in the Bachani Farms plantation',
    category: 'Orchard',
  },
  {
    key: 'g3',
    url: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&h=1000&fit=crop&auto=format',
    caption: 'Papaya trees in fruit',
    alt: 'Papaya trees with ripening fruit on the farm',
    category: 'Orchard',
  },
  {
    key: 'g4',
    url: 'https://images.unsplash.com/photo-1592991541782-ddb60c67c7b5?w=800&h=600&fit=crop&auto=format',
    caption: 'Cucumber vines inside a tunnel',
    alt: 'Cucumber vines growing on trellises inside a farm tunnel',
    category: 'Tunnels',
  },
  {
    key: 'g5',
    url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=1000&fit=crop&auto=format',
    caption: 'Tunnels from above',
    alt: 'Aerial view of cucumber tunnels at Bachani Farms',
    category: 'Tunnels',
  },
  {
    key: 'g6',
    url: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop&auto=format',
    caption: 'Wheat field in spring',
    alt: 'Golden wheat field in spring at Bachani Farms',
    category: 'Fields',
  },
  {
    key: 'g7',
    url: 'https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?w=800&h=1000&fit=crop&auto=format',
    caption: 'Sugarcane before harvest',
    alt: 'Tall sugarcane ready for harvest in an open field',
    category: 'Fields',
  },
  {
    key: 'g8',
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&auto=format',
    caption: 'Irrigation channel between fields',
    alt: 'Irrigation channel running between farm fields',
    category: 'Fields',
  },
  {
    key: 'g9',
    url: 'https://images.unsplash.com/photo-1605027990121-cbae9e0642df?w=800&h=1000&fit=crop&auto=format',
    caption: 'Mango harvest in crates',
    alt: 'Freshly picked mangoes packed in crates',
    category: 'Harvest',
  },
  {
    key: 'g10',
    url: 'https://images.unsplash.com/photo-1569936464374-a9c60b6f0e73?w=800&h=600&fit=crop&auto=format',
    caption: 'Sugarcane loaded for the mill',
    alt: 'Cut sugarcane loaded on a trailer for the mill',
    category: 'Harvest',
  },
  {
    key: 'g11',
    url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=1000&fit=crop&auto=format',
    caption: 'The farm team',
    alt: 'The Bachani Farms team standing in the orchard',
    category: 'People',
  },
  {
    key: 'g12',
    url: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop&auto=format',
    caption: 'Owner walking the orchard',
    alt: 'The owner of Bachani Farms walking between mango trees',
    category: 'People',
  },
];
