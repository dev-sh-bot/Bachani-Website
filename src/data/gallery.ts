import { images } from './images';
import { type FarmingMethod } from './farming';

export interface GalleryItem {
  key: string;
  url: string;
  caption: string;
  alt: string;
  width: number;
  height: number;
  category: FarmingMethod | 'Harvest';
}

export const galleryItems: GalleryItem[] = [
  {
    key: 'g1',
    width: 1200,
    height: 900,
    url: images['mangoOrchard'].url,
    caption: 'Mangoes growing in the orchard',
    alt: images['mangoOrchard'].alt,
    category: 'Orchards',
  },
  {
    key: 'g2',
    width: 900,
    height: 700,
    url: images['banana'].url,
    caption: 'Bananas growing on the plant',
    alt: images['banana'].alt,
    category: 'Open fields',
  },
  {
    key: 'g3',
    width: 900,
    height: 700,
    url: images['tomatoes'].url,
    caption: 'Tomatoes ripening on the vine',
    alt: images['tomatoes'].alt,
    category: 'Open fields',
  },
  {
    key: 'g4',
    width: 1200,
    height: 900,
    url: '/images/gallery/cucumber-tunnel.webp',
    caption: 'Cucumber vines inside a tunnel',
    alt: 'Cucumber vines growing on trellises inside a farm tunnel',
    category: 'Tunnels',
  },
  {
    key: 'g5',
    width: 900,
    height: 600,
    url: images['cucumberFresh'].url,
    caption: 'Fresh cucumber harvest',
    alt: images['cucumberFresh'].alt,
    category: 'Harvest',
  },
  {
    key: 'g6',
    width: 800,
    height: 1000,
    url: images['growField'].url,
    caption: 'Wheat field in spring',
    alt: 'Golden wheat field in spring at Bachani Farms',
    category: 'Open fields',
  },
  {
    key: 'g7',
    width: 1200,
    height: 900,
    url: images['sugarcane'].url,
    caption: 'Sugarcane before harvest',
    alt: 'Tall sugarcane ready for harvest in an open field',
    category: 'Open fields',
  },
  {
    key: 'g8',
    width: 800,
    height: 600,
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop&auto=format',
    caption: 'Wheat fields at sunrise',
    alt: 'Sunrise over crop fields ready for harvest',
    category: 'Open fields',
  },
  {
    key: 'g9',
    width: 1200,
    height: 900,
    url: images['packing'].url,
    caption: 'Freshly harvested mangoes',
    alt: images['packing'].alt,
    category: 'Harvest',
  },
  {
    key: 'g10',
    width: 1200,
    height: 900,
    url: '/images/gallery/sugarcane-harvest.webp',
    caption: 'Sugarcane loaded for the mill',
    alt: 'Cut sugarcane loaded on a trailer for the mill',
    category: 'Harvest',
  },
  {
    key: 'g11',
    width: 900,
    height: 700,
    url: images['bananaBunch'].url,
    caption: 'Banana bunches developing',
    alt: images['bananaBunch'].alt,
    category: 'Open fields',
  },
  {
    key: 'g12',
    width: 1200,
    height: 800,
    url: images['tomatoHarvest'].url,
    caption: 'Freshly harvested tomatoes',
    alt: images['tomatoHarvest'].alt,
    category: 'Harvest',
  },
];
