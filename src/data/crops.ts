export interface Variety {
  name: string;
  description: string;
  harvestNote: string;
}

export interface CropStep {
  title: string;
  description: string;
}

export interface QualityItem {
  title: string;
  description: string;
}

export interface CropFaq {
  question: string;
  answer: string;
}

export interface Crop {
  slug: string;
  name: string;
  category: 'Fruit' | 'Vegetable' | 'Field crop';
  method: string;
  methodLabel: string;
  harvestMonths: number[];
  harvestLabel: string;
  accentColor: string;
  area: string;
  shortDescription: string;
  imageKey: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  h1: string;
  headerText: string;
  varieties: Variety[];
  aboutParagraphs: string[];
  growingHeading: string;
  steps: CropStep[];
  quality: QualityItem[];
  photoCaptions: string[];
  faqs: CropFaq[];
  related: string[];
}

export const crops: Crop[] = [
  {
    slug: 'mango',
    name: 'Mango',
    category: 'Fruit',
    method: 'Orchard',
    methodLabel: 'Orchard',
    harvestMonths: [6, 7],
    harvestLabel: 'June to July',
    accentColor: '#EFA43A',
    area: '[00] acres',
    shortDescription: 'Our mango orchard is the heart of the farm. The trees are pruned, watered and cared for all year for a sweet June and July harvest.',
    imageKey: 'mango',
    tags: ['Fruit', 'Orchard', 'June to July'],
    seoTitle: 'Mango Orchard in [District], Pakistan | Bachani Farms',
    seoDescription: 'Bachani Farms grows mangoes in a well-tended orchard in [District], Pakistan. Discover our varieties, the June to July harvest and how we supply export buyers.',
    h1: 'Mango',
    headerText: 'Our mango orchard is the heart of Bachani Farms. Each tree is cared for through the year, from pruning and flowering to a careful summer harvest.',
    varieties: [
      { name: '[Variety 1]', description: '[Taste, size and colour in one sentence]', harvestNote: '[Month] to [Month]' },
      { name: '[Variety 2]', description: '[Taste, size and colour in one sentence]', harvestNote: '[Month] to [Month]' },
      { name: '[Variety 3]', description: '[Taste, size and colour in one sentence]', harvestNote: '[Month] to [Month]' },
    ],
    aboutParagraphs: [
      'Mango is the heart of Bachani Farms. Our orchard covers [00] acres of [Variety 1], [Variety 2] and [Variety 3] trees, planted in ordered rows that make pruning, watering and harvesting easier and let air and light reach every tree.',
      'A mango tree gives its best when it is looked after all year. After harvest our team prunes the trees, plans irrigation around flowering and fruit set, and watches every block for pests and disease. When the fruit is ready it is picked carefully and handled gently, because the quality a buyer receives is decided in the orchard.',
    ],
    growingHeading: 'From flower to harvest',
    steps: [
      { title: 'Pruning and care', description: 'After harvest, trees are pruned to open the canopy and encourage healthy new growth.' },
      { title: 'Flowering', description: 'Flowering is the most sensitive stage, so we plan watering and crop protection around it.' },
      { title: 'Fruit set and growth', description: 'As fruit forms, we monitor each block for water, nutrition and pests.' },
      { title: 'Harvest', description: 'Fruit is picked at the right maturity, sorted and packed with care.' },
    ],
    quality: [
      { title: 'Picked at the right maturity', description: 'We harvest when the fruit is ready, not before, so it ripens well after it leaves the farm.' },
      { title: 'Sorted by size and quality', description: 'Fruit is checked and graded before packing so buyers receive a consistent product.' },
      { title: 'Handled gently', description: 'Careful picking and packing protects the skin and the shelf life of the fruit.' },
    ],
    photoCaptions: ['Mango orchard rows', 'Fruit on the tree before harvest', 'Harvested mangoes in crates'],
    faqs: [
      { question: 'When is mango season at Bachani Farms?', answer: 'Our mango harvest runs from around June to July, depending on the variety and the weather each year.' },
      { question: 'Which mango varieties do you grow?', answer: '[List your varieties here.] Each has its own taste, size and harvest time, which we describe on this page.' },
      { question: 'Do you sell mangoes directly to the public?', answer: 'No. We supply our mangoes under contract to trusted buyers, who take them on to markets in Pakistan and abroad.' },
    ],
    related: ['banana', 'papaya', 'cucumber', 'sugarcane', 'wheat'],
  },
  {
    slug: 'banana',
    name: 'Banana',
    category: 'Fruit',
    method: 'Plantation',
    methodLabel: 'Plantation',
    harvestMonths: [3, 4, 5, 6, 7, 8, 9, 10],
    harvestLabel: 'March to October',
    accentColor: '#E6C23E',
    area: '[00] acres',
    shortDescription: 'Banana grows in long plantation rows, with bunches harvested as they mature from March to October.',
    imageKey: 'banana',
    tags: ['Fruit', 'Plantation', 'March to October'],
    seoTitle: 'Banana Plantation in [District], Pakistan | Bachani Farms',
    seoDescription: 'Discover the banana plantation at Bachani Farms in [District], Pakistan: long, well-tended rows that produce fruit from March to October for contract buyers.',
    h1: 'Banana',
    headerText: 'Banana plants grow in long, sheltered rows. Bunches are harvested from March to October as they reach the right size.',
    varieties: [
      { name: '[Variety 1]', description: '[Taste, size and colour in one sentence]', harvestNote: 'March to October' },
      { name: '[Variety 2]', description: '[Taste, size and colour in one sentence]', harvestNote: 'March to October' },
    ],
    aboutParagraphs: [
      'Banana is one of the steadiest crops on the farm. Across [00] acres of plantation, our [Variety 1] plants grow in straight rows that are easy to irrigate, feed and inspect.',
      'A banana plant grows quickly, but a good bunch takes patience. We support each plant with steady water and nutrition, remove extra suckers so the strongest ones grow on, and cut each bunch only when the fruit has reached the right size for our buyers.',
    ],
    growingHeading: 'From planting to harvest',
    steps: [
      { title: 'Planting', description: 'Healthy young plants are set out in prepared rows with space to grow.' },
      { title: 'Growth and care', description: 'Regular watering, feeding and weeding keep the plants strong.' },
      { title: 'Bunch development', description: 'As bunches form, we protect them and support the plant so the fruit fills out evenly.' },
      { title: 'Harvest', description: 'Bunches are cut when the fruit reaches the right size and are carried carefully out of the field.' },
    ],
    quality: [
      { title: 'Cut at the right size', description: 'Bunches are harvested when the fruit has filled out to the size our buyers expect.' },
      { title: 'Handled to avoid bruising', description: 'Careful cutting and carrying keeps the fruit clean and undamaged.' },
      { title: 'Checked before dispatch', description: 'Bunches are inspected and sorted before they leave the farm.' },
    ],
    photoCaptions: ['Banana plantation rows', 'A bunch developing on the plant', 'Harvested bunches'],
    faqs: [
      { question: 'When is banana harvested at Bachani Farms?', answer: 'Our banana harvest runs from around March to October. Timing varies with the plant cycle and the weather.' },
      { question: 'Which banana varieties do you grow?', answer: '[List your varieties here.]' },
      { question: 'Do you sell bananas directly to the public?', answer: 'No. We supply our bananas under contract to trusted buyers, who take them on to markets in Pakistan and abroad.' },
    ],
    related: ['mango', 'papaya', 'cucumber', 'sugarcane', 'wheat'],
  },
  {
    slug: 'papaya',
    name: 'Papaya',
    category: 'Fruit',
    method: 'Plantation',
    methodLabel: 'Plantation',
    harvestMonths: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    harvestLabel: 'February to November',
    accentColor: '#EC8A3E',
    area: '[00] acres',
    shortDescription: 'Papaya trees grow quickly and fruit steadily, giving a harvest from February to November.',
    imageKey: 'papaya',
    tags: ['Fruit', 'Plantation', 'February to November'],
    seoTitle: 'Papaya Farm in [District], Pakistan | Bachani Farms',
    seoDescription: 'Bachani Farms grows papaya in a plantation in [District], Pakistan. Fast-growing trees give steady fruit from February to November for contract buyers.',
    h1: 'Papaya',
    headerText: 'Papaya trees grow fast and fruit steadily. We pick the fruit as it begins to colour, ready for its journey to market.',
    varieties: [
      { name: '[Variety 1]', description: '[Taste, size and colour in one sentence]', harvestNote: 'February to November' },
      { name: '[Variety 2]', description: '[Taste, size and colour in one sentence]', harvestNote: 'February to November' },
    ],
    aboutParagraphs: [
      'Papaya is a quick, generous crop. In our plantation of [00] acres, young plants grow fast, begin to flower and give fruit from February to November.',
      'Papaya rewards close attention. The trees are sensitive to too much or too little water, so we watch moisture, nutrition and plant health closely. Fruit is picked as it starts to turn from green to yellow, so it holds well on the way to market.',
    ],
    growingHeading: 'From seedling to harvest',
    steps: [
      { title: 'Seedlings and planting', description: 'Healthy seedlings are raised and planted out in prepared rows.' },
      { title: 'Growth', description: 'Steady watering and feeding help the trees grow strong and even.' },
      { title: 'Flowering and fruit set', description: 'We monitor flowering closely, because it decides how well the fruit will set.' },
      { title: 'Harvest', description: 'Fruit is picked as it begins to colour and is handled gently.' },
    ],
    quality: [
      { title: 'Picked as it colours', description: 'We harvest at the first turn of colour so the fruit travels well.' },
      { title: 'Gently handled', description: 'Papaya bruises easily, so every fruit is picked and packed with care.' },
      { title: 'Graded before packing', description: 'Fruit is sorted by size and condition so buyers receive an even product.' },
    ],
    photoCaptions: ['Papaya trees in rows', 'Fruit clusters on the trunk', 'Papaya ready for market'],
    faqs: [
      { question: 'How long is the papaya season?', answer: 'Our papaya harvest runs from around February to November.' },
      { question: 'Which papaya varieties do you grow?', answer: '[List your varieties here.]' },
      { question: 'Do you sell papaya directly to the public?', answer: 'No. We supply our papaya under contract to trusted buyers, who take it on to markets in Pakistan and abroad.' },
    ],
    related: ['mango', 'banana', 'cucumber', 'sugarcane', 'wheat'],
  },
  {
    slug: 'cucumber',
    name: 'Cucumber',
    category: 'Vegetable',
    method: 'Tunnel farming',
    methodLabel: 'Tunnel farming',
    harvestMonths: [5, 6, 7, 8, 9, 10, 11, 12],
    harvestLabel: 'May to December',
    accentColor: '#3E8E3E',
    area: '[00] tunnels',
    shortDescription: 'Cucumbers grow in tunnels from May to December, trained on trellises and picked every few days.',
    imageKey: 'cucumber',
    tags: ['Vegetable', 'Tunnels', 'May to December'],
    seoTitle: 'Cucumber Tunnel Farming in [District], Pakistan | Bachani Farms',
    seoDescription: 'Bachani Farms grows cucumbers in tunnels from May to December in [District], Pakistan. See how tunnel farming gives a steady, fresh harvest.',
    h1: 'Cucumber',
    headerText: 'Our cucumbers grow in tunnels from May to December. The tunnels protect the vines and support a steady harvest.',
    varieties: [
      { name: '[Variety 1]', description: '[Taste, size and colour in one sentence]', harvestNote: 'May to December' },
      { name: '[Variety 2]', description: '[Taste, size and colour in one sentence]', harvestNote: 'May to December' },
    ],
    aboutParagraphs: [
      'Tunnel farming lets us grow cucumbers through the cooler months, when open-field conditions are harder. Inside our [00] tunnels, vines are trained up trellises, which keeps the fruit clean, straight and easy to pick.',
      'Cucumbers grow fast and need close attention. We manage water and nutrition carefully, keep the tunnels ventilated, and pick every few days so the fruit is harvested at the right size. That steady rhythm gives buyers a fresh, regular supply through the season.',
    ],
    growingHeading: 'From sowing to picking',
    steps: [
      { title: 'Tunnel preparation and sowing', description: 'Beds are prepared inside the tunnels before seed or seedlings go in.' },
      { title: 'Transplanting and trellising', description: 'Young plants are set out and trained up trellises to grow upright.' },
      { title: 'Flowering and fruit set', description: 'We manage water, nutrition and airflow to help flowers set fruit.' },
      { title: 'Picking', description: 'Fruit is picked every few days, at the right size, by hand.' },
    ],
    quality: [
      { title: 'Picked at an even size', description: 'Regular picking means fruit is harvested at the size buyers ask for.' },
      { title: 'Kept clean and cool', description: 'Fruit is kept out of the sun and handled quickly after picking.' },
      { title: 'Sorted before packing', description: 'Each picking is checked and graded before it is packed.' },
    ],
    photoCaptions: ['Tunnels from outside', 'Vines on trellises inside a tunnel', 'Fresh-picked cucumbers'],
    faqs: [
      { question: 'Why are cucumbers grown in tunnels?', answer: 'Tunnels protect the vines from cold, wind and heavy weather. That extends the growing season and gives steadier quality.' },
      { question: 'When is the cucumber season?', answer: 'Our cucumbers are harvested from around May to December.' },
      { question: 'Do you sell cucumbers directly to the public?', answer: 'No. We supply our cucumbers under contract to trusted buyers, who take them on to markets in Pakistan and abroad.' },
    ],
    related: ['mango', 'banana', 'papaya', 'sugarcane', 'wheat'],
  },
  {
    slug: 'sugarcane',
    name: 'Sugarcane',
    category: 'Field crop',
    method: 'Open field',
    methodLabel: 'Open field',
    harvestMonths: [12, 1, 2],
    harvestLabel: 'December to February',
    accentColor: '#86B347',
    area: '[00] acres',
    shortDescription: 'Sugarcane grows tall in our open fields and is harvested for the crushing season.',
    imageKey: 'sugarcane',
    tags: ['Field crop', 'Open field', 'December to February'],
    seoTitle: 'Sugarcane Farming in [District], Pakistan | Bachani Farms',
    seoDescription: 'Bachani Farms grows sugarcane in open fields in [District], Pakistan, harvested from December to February for the crushing season. Learn how we grow it.',
    h1: 'Sugarcane',
    headerText: 'Sugarcane is one of our largest field crops. It grows through the warm months and is harvested for the crushing season.',
    varieties: [
      { name: '[Variety 1]', description: '[Taste, size and colour in one sentence]', harvestNote: 'December to February' },
      { name: '[Variety 2]', description: '[Taste, size and colour in one sentence]', harvestNote: 'December to February' },
    ],
    aboutParagraphs: [
      'Sugarcane is a long-season crop, and it shapes the rhythm of our farm year. Across [00] acres of open field, the cane grows tall through the warm months, drawing on careful irrigation and healthy soil.',
      'Once the cane matures it is cut and sent to the mill during the crushing season, which runs from about December to February. Timing matters: cane cut at the right maturity gives the mill better sugar recovery, so we plan every field\'s harvest carefully.',
    ],
    growingHeading: 'From planting to crushing',
    steps: [
      { title: 'Planting', description: 'Fields are prepared and planted with healthy cane setts.' },
      { title: 'Tillering and growth', description: 'New shoots multiply and the cane grows tall with regular irrigation.' },
      { title: 'Maturity', description: 'We check each field so the cane is cut when it is ready.' },
      { title: 'Harvest for crushing', description: 'Cane is cut and loaded quickly for the mill.' },
    ],
    quality: [
      { title: 'Cut at maturity', description: 'Each field is harvested when the cane has reached the right maturity.' },
      { title: 'Delivered promptly', description: 'Cane is loaded and sent to the mill quickly after cutting.' },
      { title: 'Planned field by field', description: 'We schedule harvest across fields so the mill receives a steady supply.' },
    ],
    photoCaptions: ['Sugarcane at full height', 'Cutting the cane', 'Cane loaded for the mill'],
    faqs: [
      { question: 'When is the sugarcane harvest?', answer: 'Sugarcane is harvested from about December to February, during the crushing season.' },
      { question: 'Where does your sugarcane go?', answer: '[Our cane is supplied to (mill or buyer name) under contract.]' },
      { question: 'Do you sell sugarcane directly to the public?', answer: 'No. We supply our cane under contract to trusted buyers and mills.' },
    ],
    related: ['mango', 'banana', 'papaya', 'cucumber', 'wheat'],
  },
  {
    slug: 'wheat',
    name: 'Wheat',
    category: 'Field crop',
    method: 'Open field',
    methodLabel: 'Open field',
    harvestMonths: [3, 4],
    harvestLabel: 'March to April',
    accentColor: '#CFA64C',
    area: '[00] acres',
    shortDescription: 'Wheat is sown in winter and harvested in spring, turning the fields gold before harvest.',
    imageKey: 'wheat',
    tags: ['Field crop', 'Open field', 'March to April'],
    seoTitle: 'Wheat Farming in [District], Pakistan | Bachani Farms',
    seoDescription: 'Bachani Farms grows wheat in open fields in [District], Pakistan, sown in winter and harvested in March and April. Discover how wheat fits our farm year.',
    h1: 'Wheat',
    headerText: 'Wheat is sown after the summer crops and harvested in spring. It is an important part of the farm year.',
    varieties: [
      { name: '[Variety 1]', description: '[Taste, size and colour in one sentence]', harvestNote: 'March to April' },
      { name: '[Variety 2]', description: '[Taste, size and colour in one sentence]', harvestNote: 'March to April' },
    ],
    aboutParagraphs: [
      'Wheat carries the farm through winter and into spring. After the summer crops are cleared, we prepare the fields and sow wheat across [00] acres, timing it to make the most of the cool season.',
      'Through winter the crop tillers and thickens. By spring the ears fill and the fields turn gold. Harvest usually falls between March and April, and rotating wheat with our other crops helps keep the soil healthy.',
    ],
    growingHeading: 'From sowing to harvest',
    steps: [
      { title: 'Sowing', description: 'Fields are prepared and sown once the summer crops are cleared.' },
      { title: 'Tillering', description: 'The plants spread and thicken through the cooler months.' },
      { title: 'Heading and grain fill', description: 'Ears form and the grain fills as the weather warms.' },
      { title: 'Harvest', description: 'The crop is harvested when the grain is ripe and dry.' },
    ],
    quality: [
      { title: 'Harvested when ripe and dry', description: 'We cut at the right moisture so the grain stores and travels well.' },
      { title: 'Clean fields, clean grain', description: 'Careful field preparation and weed control keep the crop clean.' },
      { title: 'Rotated for soil health', description: 'Wheat follows other crops to keep the soil balanced and productive.' },
    ],
    photoCaptions: ['Wheat field in early spring', 'Ears ripening before harvest', 'Harvest in progress'],
    faqs: [
      { question: 'When is wheat harvested at Bachani Farms?', answer: 'Our wheat is harvested from around March to April, after being sown in winter.' },
      { question: 'Why is wheat part of your crop rotation?', answer: 'Wheat follows other crops so the soil is used in a balanced way, which helps keep the land productive.' },
      { question: 'Do you sell wheat directly to the public?', answer: 'No. We supply our wheat under contract to trusted buyers.' },
    ],
    related: ['mango', 'banana', 'papaya', 'cucumber', 'sugarcane'],
  },
];

export function getCropBySlug(slug: string): Crop | undefined {
  return crops.find(c => c.slug === slug);
}
