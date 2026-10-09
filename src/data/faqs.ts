import { crops, cropList } from './crops';
import { farmingSummary } from './farming';

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: Record<string, FaqItem[]> = {
  home: [
    {
      question: 'What does Bachani Farms grow?',
      answer: `Bachani Farms uses three kinds of farming. ${farmingSummary}`,
    },
    {
      question: 'Where is the farm located?',
      answer: 'Our farm is in [District], [Province], Pakistan. You can find the address and a map on our Contact page.',
    },
    {
      question: 'Does Bachani Farms sell directly to the public?',
      answer: 'No. We supply our harvest under contract to trusted buyers, who take it on to markets in Pakistan and abroad.',
    },
    {
      question: 'When is each crop harvested?',
      answer: `${crops.map(crop => `${crop.name}: ${crop.harvestMonths.length ? crop.harvestLabel : 'harvest dates to be confirmed'}`).join('; ')}. Harvest months are indicative and can vary with the season.`,
    },
    {
      question: 'How can a buyer work with Bachani Farms?',
      answer: 'Send us a message through our Contact page and choose Contract supply as the subject. Tell us which crops you are interested in and our team will reply.',
    },
  ],
  quality: [
    {
      question: 'How do you keep produce fresh?',
      answer: 'We pick at the right stage, move produce out of the sun quickly, pack it carefully [and cool it] before dispatch.',
    },
    {
      question: 'Do you grade your produce?',
      answer: 'Yes. Each lot is checked and graded by size, colour and condition before packing.',
    },
    {
      question: 'Who transports the produce?',
      answer: '[Buyers collect the produce from the farm, or we arrange delivery to an agreed point.] Details are set in each contract.',
    },
  ],
  partners: [
    {
      question: 'Do you sell to individual customers?',
      answer: 'No. We supply under contract to trusted buyers.',
    },
    {
      question: 'Which crops can you supply?',
      answer: `We grow ${cropList}. Each has its own season, shown in our harvest calendar.`,
    },
    {
      question: 'Can I visit the farm?',
      answer: 'Please contact us to discuss your request.',
    },
    {
      question: 'How do I start a conversation?',
      answer: 'Use our Contact page and choose Contract supply as the subject, or send us a WhatsApp message.',
    },
  ],
};
