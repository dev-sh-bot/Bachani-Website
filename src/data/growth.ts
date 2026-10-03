export interface GrowthPanel {
  index: number;
  monolabel: string;
  title: string;
  body: string;
  cropSlugs: string[];
  imageKey: string;
  photoLabel: string;
}

export const growthPanels: GrowthPanel[] = [
  {
    index: 0,
    monolabel: '01 / 03',
    title: 'Orchards and plantations.',
    body: 'Mango, banana and papaya grow in long, well-tended rows that we care for all year.',
    cropSlugs: ['mango', 'banana', 'papaya'],
    imageKey: 'growOrchard',
    photoLabel: '01 · ORCHARDS AND PLANTATIONS',
  },
  {
    index: 1,
    monolabel: '02 / 03',
    title: 'Tunnel farming.',
    body: 'Cucumbers grow in tunnels that protect the crop and extend the season.',
    cropSlugs: ['cucumber'],
    imageKey: 'growTunnel',
    photoLabel: '02 · TUNNEL FARMING',
  },
  {
    index: 2,
    monolabel: '03 / 03',
    title: 'Open fields.',
    body: 'Sugarcane and wheat grow in open fields, planted and harvested with the seasons.',
    cropSlugs: ['sugarcane', 'wheat'],
    imageKey: 'growField',
    photoLabel: '03 · OPEN FIELDS',
  },
];
