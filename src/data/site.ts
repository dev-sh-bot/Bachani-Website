import { cropList } from './crops';

export const farmStats = {
  acres: 100,
  yearsOfFarming: 25,
  teamMembers: 25,
} as const;

export const site = {
  name: 'Bachani Farms',
  tagline: `Growing ${cropList} on ${farmStats.acres} acres in [District], Pakistan.`,
  address: 'Farm address, [District], [Province], Pakistan',
  district: '[District]',
  province: '[Province]',
  officeHours: 'Monday to Saturday, [9:00 AM to 5:00 PM]',
  nav: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Crops', href: '/crops', hasMegaMenu: true },
    { label: 'Our Farm', href: '/farm', hasDropdown: true },
    { label: 'News', href: '/news' },
    { label: 'Gallery', href: '/gallery' },
  ],
  farmNav: [
    { label: 'Farm Overview', href: '/farm' },
    { label: 'Quality and Packing', href: '/farm/quality' },
    { label: 'Sustainability', href: '/farm/sustainability' },
  ],
  seo: {
    canonical: 'https://www.bachanifarms.com',
    ogImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=630&fit=crop&auto=format',
    twitterCard: 'summary_large_image',
  },
};
