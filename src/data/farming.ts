export const farmingTypes = ['Orchards', 'Tunnels', 'Open fields'] as const;

export type FarmingMethod = typeof farmingTypes[number];

export const farmingSummary = 'Mangoes grow in orchards, cucumber in tunnels, and sugarcane, wheat, tomatoes and banana in open fields.';
