import { crops } from './crops';
import { farmingTypes, type FarmingMethod } from './farming';

export interface GrowthPanel {
  index: number;
  monolabel: string;
  title: string;
  body: string;
  cropSlugs: string[];
  imageKey: string;
  photoLabel: string;
}

const panelContent: Record<FarmingMethod, { body: string; imageKey: string }> = {
  Orchards: {
    body: 'Mangoes grow in our orchards, where each tree is cared for through flowering, fruit development and harvest.',
    imageKey: 'growOrchard',
  },
  Tunnels: {
    body: 'Cucumber grows in our tunnels, with vines trained on trellises and cared for through the growing season.',
    imageKey: 'growTunnel',
  },
  'Open fields': {
    body: 'Sugarcane, wheat, tomatoes and banana grow outdoors in our open fields, each tended and harvested through its own season.',
    imageKey: 'growField',
  },
};

export const growthPanels: GrowthPanel[] = farmingTypes.map((method, index) => ({
  index,
  monolabel: `${String(index + 1).padStart(2, '0')} / 03`,
  title: `${method}.`,
  body: panelContent[method].body,
  cropSlugs: crops.filter(crop => crop.method === method).map(crop => crop.slug),
  imageKey: panelContent[method].imageKey,
  photoLabel: `${String(index + 1).padStart(2, '0')} · ${method.toUpperCase()}`,
}));
